import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  firefox,
  webkit,
} from "@playwright/test";

class BrowserManager {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;

  async launchBrowser(
    browserType: string = "chromium",
    headless: boolean = true
  ) {
    switch (browserType.toLowerCase()) {
      case "firefox":
        this.browser = await firefox.launch({ headless });
        break;
      case "webkit":
        this.browser = await webkit.launch({ headless });
        break;
      default:
        this.browser = await chromium.launch({ headless });
        break;
    }

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  getPage(): Page {
    if (!this.page)
      throw new Error("Browser not launched. Call launchBrowser() first.");
    return this.page;
  }

  async closeBrowser() {
    if (this.browser) await this.browser.close();
  }
}

export default new BrowserManager();
