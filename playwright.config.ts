import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "./**/tests/features/**/*.feature",
  steps: [
    "./**/tests/steps/*.ts",
    "./**/src/support/hooks/*.ts",
    "./**/src/support/fixtures/*.ts",
  ],
  tags: process.env.TAG,
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", {
      outputFile: "./reports/cucumber-report/index.html",
      externalAttachments: true,
    }),
    ["html", { open: "never" }],
  ],
  use: {
    screenshot: "on",
    trace: "on",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
