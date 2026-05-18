import { test, expect } from "@playwright/test";

test.describe("ScholarsHub Smoke Tests", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Schoolars Hub/);
  });

  test("Enroll now button navigates to about page", async ({ page }) => {
    await page.goto("/");

    // We use first() in case there are multiple "Enroll now" links (e.g. desktop vs mobile)
    const enrollButton = page.getByRole("link", { name: /Enroll now/i }).first();
    await expect(enrollButton).toBeVisible();
    await enrollButton.click();

    await expect(page).toHaveURL(/.*\/about/);
  });

  test("navigation bar contains key links", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByLabel("Primary navigation");
    await expect(nav.getByRole("link", { name: /Home/i }).first()).toBeVisible();
    await expect(nav.getByRole("link", { name: /About/i }).first()).toBeVisible();
    await expect(nav.getByRole("link", { name: /Subjects/i }).first()).toBeVisible();
  });

  test("inquiry form is accessible", async ({ page }) => {
    await page.goto("/");

    // InquiryForm is lazy-loaded — Playwright's auto-retry handles the wait.
    // The default timeout (5 s) is enough; increase if Slow 4G throttling is active.
    const formHeading = page.getByRole("heading", { name: /Request a callback/i });
    await expect(formHeading).toBeVisible({ timeout: 8000 });
  });
});
