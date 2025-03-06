import { Given, When, Then } from "../../src/support/fixtures/fixtures";
import { expect } from "@playwright/test";
import logger from "utils/logger";

Given("I am on home page", async ({ page }) => {
  logger.info(`Navigating to`);
});

When("I click link {string}", async ({ page }, name) => {
  logger.info(`Clicking on button: ${name}`);
  await page.getByRole("link", { name }).click();
});

Then("I see in title {string}", async ({ page }, keyword) => {
  logger.info(`Verifying presence of text: ${keyword}`);
  await expect(page).toHaveTitle(new RegExp(keyword));
});
