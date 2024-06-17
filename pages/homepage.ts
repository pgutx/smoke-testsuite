import { type Locator, type Page } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly shopLink: Locator;

    constructor(page: Page) {
      this.page = page;
      this.shopLink = page.getByLabel('SHOP Home');
    }

    async goToHomepage() {
      await this.page.goto('https://shop.polymer-project.org/');
    }
}