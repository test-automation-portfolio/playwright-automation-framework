import { test, expect } from '../../fixtures/testFixtures';

test(
  'authenticated user can view products',
  {
    tag: '@smoke',
  },
  async ({ authenticatedPage }) => {
    await expect(authenticatedPage.getByText('Products')).toBeVisible();
  },
);

test(
  'authenticated user can see product list',
  {
    tag: '@regression',
  },
  async ({ authenticatedPage, productsPage }) => {
    await productsPage.assertPageLoaded();

    await productsPage.assertProductsDisplayed();

    const productCount = await productsPage.getProductCount();

    expect(productCount).toBeGreaterThan(0);
  },
);
