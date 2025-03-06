import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  private getStartedButton = "text=Get Started";

  async clickGetStarted() {
    await this.click(this.getStartedButton);
  }
}
