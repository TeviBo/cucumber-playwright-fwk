import { World } from "@support/world/World";
import { test as base, createBdd } from "playwright-bdd";
import { Page } from "playwright-core";

export const test = base.extend<object>({
  page: async ({ page }, use) => {
    await page.goto("https://playwright.dev");
    await use(page);
  },
});

export const { Given, When, Then } = createBdd(test);
