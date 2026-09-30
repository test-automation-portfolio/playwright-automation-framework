import { test, expect } from '../../fixtures/testFixtures';
import { config } from '../../config/environment';

test.describe('API and UI Integration', () => {
  test('should validate API data before completing a UI workflow', async ({
    userService,
    loginPage,
    productsPage,
  }) => {
    // --------------------------------------------------
    // API validation
    // --------------------------------------------------

    const user = await userService.getUser(2);

    expect(user.id).toBe(2);
    expect(user.email).toBeTruthy();

    // --------------------------------------------------
    // UI workflow
    // --------------------------------------------------

    await loginPage.navigate();

    await loginPage.login(
      config.credentials.username,
      config.credentials.password,
    );

    await productsPage.assertPageLoaded();

    await productsPage.assertProductsDisplayed();
  });
});
