import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.getByPlaceholder('Username');

    this.passwordInput = page.getByPlaceholder('Password');

    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });

    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigate(): Promise<void> {
    await super.navigate('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);

    await this.click(this.loginButton);
  }

  async assertLoginPageVisible(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
  }

  async assertLoginErrorVisible(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}
