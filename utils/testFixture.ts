import { test as base, expect, type APIRequestContext } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ApiClient } from '../utils/apiClient';

type TestFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  apiClient: ApiClient;
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
    const apiClient = new ApiClient(request as APIRequestContext);

    await use(apiClient);
  },
});

export { expect };
