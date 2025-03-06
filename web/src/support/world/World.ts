import { Page } from "@playwright/test";
import testData from "../data/testData.json" assert { type: "json" };
import userCredentials from "../data/userCredentials.json" assert { type: "json" };
export class World {
  testData: typeof testData;
  userCredentials: typeof userCredentials;

  constructor(public page: Page) {
    this.testData = testData;
    this.userCredentials = userCredentials;
    this.page = page;
  }

  async openHomePage() {
    await this.page.goto("https://playwright.dev");
  }
}
