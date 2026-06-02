const { chromium } = require("playwright");
const fs = require("node:fs");

const deployUrl = fs.readFileSync("/workspace/.deploy_url", "utf8").trim();
const expectedMissingPath = "/definitely-missing";

function failAndExit(reason) {
  console.log(`UI_VERIFY: FAIL | ${reason}`);
  process.exit(0);
}

if (!deployUrl) {
  failAndExit("/workspace/.deploy_url empty");
}

const failures = [];
const addFailure = (reason) => {
  if (!failures.includes(reason)) {
    failures.push(reason);
  }
};

const isExpectedMissingPage = (url) => {
  try {
    return new URL(url).pathname === expectedMissingPath;
  } catch {
    return false;
  }
};

(async () => {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  page.on("console", (message) => {
    if (message.type() !== "error") {
      return;
    }

    const locationUrl = message.location().url;
    const text = message.text();

    if (
      isExpectedMissingPage(locationUrl) &&
      text.includes("Failed to load resource") &&
      text.includes("404")
    ) {
      return;
    }

    addFailure(`console error: ${text.slice(0, 160)}`);
  });

  page.on("pageerror", (error) => {
    addFailure(`page error: ${error.message.slice(0, 160)}`);
  });

  page.on("requestfailed", (request) => {
    addFailure(`failed request: ${request.url()}`);
  });

  page.on("response", (response) => {
    const status = response.status();
    const url = response.url();

    if (status >= 500) {
      addFailure(`server error ${status}: ${url}`);
    }
  });

  try {
    const response = await page.goto(deployUrl, {
      waitUntil: "networkidle",
      timeout: 30_000,
    });

    if (!response || response.status() !== 200) {
      addFailure(`root returned ${response ? response.status() : "no response"}`);
    }

    const h1 = page.getByRole("heading", {
      level: 1,
      name: "Ship production code from your GitHub issues",
    });
    await h1.waitFor({ state: "visible", timeout: 10_000 });

    const contentSignals = await page.locator("body").innerText();
    for (const text of [
      "How It Works",
      "Built for real repository work",
      "Questions teams ask first",
      "Bring myClawTeam into your next issue",
    ]) {
      if (!contentSignals.includes(text)) {
        addFailure(`missing content: ${text}`);
      }
    }

    const styleCheck = await page.evaluate(() => {
      const heading = document.querySelector("h1");
      const header = document.querySelector("header");
      const body = document.body;

      if (!heading || !header) {
        return { ok: false, reason: "missing heading or header" };
      }

      const headingStyle = window.getComputedStyle(heading);
      const headerStyle = window.getComputedStyle(header);
      const bodyStyle = window.getComputedStyle(body);
      const headingSize = Number.parseFloat(headingStyle.fontSize);

      if (headingSize < 40) {
        return { ok: false, reason: `h1 font too small: ${headingStyle.fontSize}` };
      }

      if (headerStyle.position !== "sticky") {
        return { ok: false, reason: `header not sticky: ${headerStyle.position}` };
      }

      if (
        bodyStyle.backgroundColor === "rgba(0, 0, 0, 0)" ||
        bodyStyle.backgroundColor === "transparent"
      ) {
        return { ok: false, reason: "body background is transparent" };
      }

      return { ok: true };
    });

    if (!styleCheck.ok) {
      addFailure(`styling not applied: ${styleCheck.reason}`);
    }

    const authText = contentSignals.toLowerCase();
    if (authText.includes("logout") || authText.includes("sign out")) {
      addFailure("auth UI shows logged-in controls for anonymous visitor");
    }

    const navChecks = [
      { label: "How It Works", hash: "#how-it-works" },
      { label: "Features", hash: "#features" },
      { label: "FAQ", hash: "#faq" },
    ];

    for (const item of navChecks) {
      await page.goto(deployUrl, { waitUntil: "networkidle" });
      await page
        .getByRole("banner")
        .getByRole("link", { name: item.label })
        .click();
      await page.waitForTimeout(500);

      if (!page.url().includes(item.hash)) {
        addFailure(`nav link did not set ${item.hash}`);
      }

      const inViewport = await page.locator(item.hash).evaluate((element) => {
        const rect = element.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      });

      if (!inViewport) {
        addFailure(`nav target not visible: ${item.hash}`);
      }
    }

    await page.goto(deployUrl, { waitUntil: "networkidle" });
    const cta = page
      .locator("section")
      .first()
      .getByRole("link", { name: "Get started" });
    await cta.click();
    await page.waitForTimeout(500);
    if (!page.url().includes("#get-started")) {
      addFailure("primary CTA did not navigate to #get-started");
    }

    const notFoundResponse = await page.goto(`${deployUrl}${expectedMissingPath}`, {
      waitUntil: "networkidle",
    });
    if (!notFoundResponse || notFoundResponse.status() !== 404) {
      addFailure(
        `404 page returned ${notFoundResponse ? notFoundResponse.status() : "no response"}`,
      );
    }
    await page
      .getByRole("heading", {
        name: "This page is not in the myClawTeam workflow.",
      })
      .waitFor({ state: "visible", timeout: 10_000 });

    await page.goto(deployUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      fullPage: true,
      path: "/workspace/verify-screenshot.png",
    });
  } catch (error) {
    addFailure(error instanceof Error ? error.message : String(error));
  } finally {
    await browser.close();
  }

  if (failures.length === 0) {
    console.log("UI_VERIFY: PASS");
  } else {
    console.log(`UI_VERIFY: FAIL | ${failures.join(" | ")}`);
  }
})();
