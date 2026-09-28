import { test, expect } from '../../fixtures/testFixtures';
import { config } from '../../config/environment';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('user can login with valid credentials', async ({
    page,
    loginPage,
    productsPage,
  }) => {
    await loginPage.login(
      config.credentials.username,
      config.credentials.password,
    );

    await expect(page).toHaveURL(/inventory/);

    await productsPage.assertPageLoaded();
    await productsPage.assertProductsDisplayed();
  });

  test('user cannot login with invalid credentials', async ({
    loginPage,
  }) => {
    await loginPage.login(
      'invalid_user',
      'invalid_password',
    );

    await loginPage.assertLoginErrorVisible();
  });
});