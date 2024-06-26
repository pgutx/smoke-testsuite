import { type Locator, type Page } from '@playwright/test';

export class LadiesOuterwear {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;

  constructor (page: Page){
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.mensOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
      this.ladiesOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies Outerwear' });
      this.mensTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s T-Shirts' });
      this.ladiesTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies T-Shirts' });
  }

  async goToLadiesOuterwearPage() {
    await this.page.goto('https://shop.polymer-project.org/list/ladies_outerwear');
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

};
