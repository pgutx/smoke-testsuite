import { type Locator, type Page } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly shopLink: Locator;
  readonly cartButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.shopLink = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
    }

    async goToHomepage() {
      await this.page.goto('https://shop.polymer-project.org/');
    }

    async clickTheShopButton() {
      await this.shopLink.click();
    }

    async clickTheCartButton() {
      await this.cartButton.click();
    }

}