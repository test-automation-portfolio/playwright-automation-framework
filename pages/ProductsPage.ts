import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly pageTitle: Locator;
  readonly products: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText('Products');

    this.products = page.locator('.inventory_item');

    this.shoppingCart = page.locator('.shopping_cart_link');
  }

  async assertPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toBeVisible();
  }

  async assertProductsDisplayed(): Promise<void> {
    await expect(this.products.first()).toBeVisible();
  }

  async getProductCount(): Promise<number> {
    return this.products.count();
  }

  async openCart(): Promise<void> {
    await this.click(this.shoppingCart);
  }
}
