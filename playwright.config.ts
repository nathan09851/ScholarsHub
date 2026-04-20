import { defineConfig, devices } from "@playwright/test";

// In CI: the workflow pre-builds the app and we just preview the dist/.
// Locally: we run the dev server for a fast feedback loop.
const CI_PORT = 4173;
const DEV_PORT = 8080;
const PORT = process.env.CI ? CI_PORT : DEV_PORT;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    // In CI: the app is pre-built by a prior workflow step; just serve it.
    // Locally: use the dev server for instant HMR.
    command: process.env.CI
      ? `npx vite preview --port ${CI_PORT} --strictPort`
      : "npm run dev",
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      VITE_SUPABASE_URL:
        process.env.VITE_SUPABASE_URL ?? "https://placeholder.supabase.co",
      VITE_SUPABASE_PUBLISHABLE_KEY:
        process.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "placeholder-key",
    },
  },
});
