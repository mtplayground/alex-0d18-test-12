import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const viewports = [
  { height: 900, label: "mobile", width: 360 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1280 },
] as const;

async function expectNoHorizontalOverflow(page: Page) {
  const hasHorizontalOverflow = await page.evaluate(() => {
    const documentElement = document.documentElement;

    return documentElement.scrollWidth > documentElement.clientWidth + 1;
  });

  expect(hasHorizontalOverflow).toBe(false);
}

for (const viewport of viewports) {
  test(`landing page layout holds at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize({
      height: viewport.height,
      width: viewport.width,
    });
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Ship production code from your GitHub issues",
      }),
    ).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });

  test(`landing page has no critical or serious axe issues at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({
      height: viewport.height,
      width: viewport.width,
    });
    await page.goto("/");

    const results = await new AxeBuilder({ page }).analyze();
    const highImpactViolations = results.violations.filter(
      (violation) =>
        violation.impact === "critical" || violation.impact === "serious",
    );

    expect(highImpactViolations).toEqual([]);
  });
}

test("mobile keyboard focus reaches brand and menu control in order", async ({
  page,
}) => {
  await page.setViewportSize({ height: 900, width: 360 });
  await page.goto("/");

  const banner = page.getByRole("banner");

  await page.keyboard.press("Tab");
  await expect(
    banner.getByRole("link", { name: "myClawTeam home" }),
  ).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(
    banner.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
});

test("desktop keyboard focus reaches primary navigation and CTA in order", async ({
  page,
}) => {
  await page.setViewportSize({ height: 900, width: 1280 });
  await page.goto("/");

  const banner = page.getByRole("banner");

  await page.keyboard.press("Tab");
  await expect(
    banner.getByRole("link", { name: "myClawTeam home" }),
  ).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(
    banner.getByRole("link", { name: "How It Works" }),
  ).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(banner.getByRole("link", { name: "Features" })).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(banner.getByRole("link", { name: "FAQ" })).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(banner.getByRole("link", { name: "Get started" })).toBeFocused();
});
