import { test, expect } from "@playwright/test";

test.describe("ScholarsHub Smoke Tests", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Schoolars Hub/);
  });

  test("View fees and enroll button navigates to payments page", async ({ page }) => {
    await page.goto("/");

    const enrollButton = page.getByRole("link", { name: /View fees and enroll/i });
    await expect(enrollButton).toBeVisible();
    await enrollButton.click();

    await expect(page).toHaveURL(/.*\/payments/);
    await expect(page.getByText(/monthly fee/i)).toBeVisible();
  });

  test("payments page shows fee plans", async ({ page }) => {
    await page.goto("/payments");

    await expect(page.getByText(/Foundation Plan/i)).toBeVisible();
    await expect(page.getByText(/Board Prep Plan/i)).toBeVisible();
    await expect(page.getByText(/INR 700/i)).toBeVisible();
    await expect(page.getByText(/INR 1,000/i)).toBeVisible();
  });

  test("navigation bar contains key links", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByLabel("Primary navigation");
    await expect(nav.getByRole("link", { name: /Home/i }).first()).toBeVisible();
    await expect(nav.getByRole("link", { name: /About/i }).first()).toBeVisible();
    await expect(nav.getByRole("link", { name: /Subjects/i }).first()).toBeVisible();
    await expect(nav.getByRole("link", { name: /Payments/i }).first()).toBeVisible();
  });

  test("inquiry form is accessible", async ({ page }) => {
    await page.goto("/");

    // InquiryForm is lazy-loaded — Playwright's auto-retry handles the wait.
    // The default timeout (5 s) is enough; increase if Slow 4G throttling is active.
    const formHeading = page.getByRole("heading", { name: /Request a callback/i });
    await expect(formHeading).toBeVisible({ timeout: 8000 });
  });
});
