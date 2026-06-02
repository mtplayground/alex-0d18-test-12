import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: false,
  use: {
    baseURL: "http://127.0.0.1:8080",
    trace: "on-first-retry",
  },
  webServer: {
    command:
      "NEXT_PUBLIC_SITE_URL=http://127.0.0.1:8080 npm run build && npm run start",
    reuseExistingServer: false,
    timeout: 120_000,
    url: "http://127.0.0.1:8080",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
