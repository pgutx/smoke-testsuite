import { type Locator, type Page } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.mensOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
    }

    async goToHomepage() {
      await this.page.goto('https://shop.polymer-project.org/');
    }

    async clickShopButton() {
      await this.shopButton.click();
    }

    async clickCartButton() {
      await this.cartButton.click();
    }

    async clickMensOuterwearButton() {
      await this.mensOuterwearButton.click();
    }

}