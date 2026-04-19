import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT || 5173;
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
    ...(process.env.CI
      ? []
      : [
          {
            name: "Desktop Chrome",
            use: { ...devices["Desktop Chrome"] },
          },
        ]),
  ],

  webServer: {
    command: process.env.CI ? "npm run build && npm run preview" : "npm run dev",
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 180000,
  },
});
