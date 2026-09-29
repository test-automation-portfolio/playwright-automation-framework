import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async click(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await expect(locator).toBeVisible();
    await locator.fill(value);
  }

  async getText(locator: Locator): Promise<string> {
    await expect(locator).toBeVisible();

    return (await locator.textContent()) ?? '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}
