import { type Locator, type Page } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;
  readonly mensOuterwearImage: Locator;
  readonly ladiesOuterwearImage: Locator;
  readonly mensTshirtImage: Locator;
  readonly ladiesTshirtImage: Locator;

    constructor(page: Page) {
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.mensOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
      this.ladiesOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies Outerwear' });
      this.mensTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s T-Shirts' });
      this.ladiesTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies T-Shirts' });
      this.mensOuterwearImage = page.getByRole('main').getByRole('link', { name: 'Men\'s Outerwear', exact: true });
      this.ladiesOuterwearImage = page.getByRole('main').getByRole('link', {name: 'Ladies Outerwear', exact: true});
      this.mensTshirtImage = page.getByRole('main').getByRole('link', { name: 'Men\'s T-Shirts', exact: true });
      this.ladiesTshirtImage = page.getByRole('main').getByRole('link', { name: 'Ladies T-Shirts', exact: true });
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

    async clickLadiesOuterwearButton() {
      await this.ladiesOuterwearButton.click();
    }

    async clickMensTshirtsButton() {
      await this.mensTshirtButton.click();
    }

    async clickLadiesTshirtsButton() {
      await this.ladiesTshirtButton.click();
    }

    async clickMensOuterwearImage() {
      await this.mensOuterwearImage.click();
    }

    async clickLadiesOuterwearImage() {
      await this.ladiesOuterwearImage.click();
    }

    async clickMensTshirtsImage() {
      await this.mensTshirtImage.click();
    }

    async clickLadiesTshirtsImage() {
      await this.ladiesTshirtImage.click();
    }
}