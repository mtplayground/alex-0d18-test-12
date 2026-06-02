import { expect, test } from "@playwright/test";

const heroHeadline = "Ship production code from your GitHub issues";

const sectionAnchors = [
  {
    heading: "A clear path from plan to production",
    id: "how-it-works",
  },
  {
    heading: "Built for real repository work",
    id: "features",
  },
  {
    heading: "Your code stays yours",
    id: "why-myclawteam",
  },
  {
    heading: "Questions teams ask first",
    id: "faq",
  },
  {
    heading: "Bring myClawTeam into your next issue",
    id: "get-started",
  },
] as const;

test("static build serves the landing page and section anchors", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: heroHeadline }),
  ).toBeVisible();

  const primaryCta = page
    .locator("section")
    .first()
    .getByRole("link", { name: "Get started" });

  await expect(primaryCta).toBeVisible();
  await primaryCta.click();
  await expect(page).toHaveURL(/#get-started$/);
  await expect(page.locator("#get-started")).toBeInViewport();

  for (const section of sectionAnchors) {
    const anchor = page.locator(`#${section.id}`);

    await anchor.scrollIntoViewIfNeeded();
    await expect(anchor).toBeInViewport();
    await expect(
      page.getByRole("heading", { name: section.heading }),
    ).toBeVisible();
  }
});

test("static build serves the custom 404 page", async ({ page }) => {
  const response = await page.goto("/missing-page");

  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", {
      name: "This page is not in the myClawTeam workflow.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Return to landing page" }),
  ).toHaveAttribute("href", "/");
});
