import { test as base, expect, type Page } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ApiClient } from '../utils/apiClient';
import { config } from '../config/environment';
import { UserService } from '../tests/api/services/UserService';

type TestFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  apiClient: ApiClient;
  authenticatedPage: Page;
  userService: UserService;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);

    await use(productsPage);
  },

  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);

    await use(apiClient);
  },
  userService: async ({ apiClient }, use) => {
  const userService = new UserService(apiClient);

  await use(userService);
},

  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      config.credentials.username,
      config.credentials.password,
    );

    await page.waitForURL(/inventory/);

    await use(page);
  },
});

export { expect };
