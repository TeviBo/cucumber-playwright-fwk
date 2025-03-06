import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class ScreenFactory {
  static getScreen(screenName: string, page: Page) {
    switch (screenName.toLowerCase()) {
      case "home":
        return new HomePage(page);
      default:
        throw new Error(`Screen ${screenName} not found.`);
    }
  }
}
