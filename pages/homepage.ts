import { type Locator, type Page } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;
  readonly mensOuterwearImageLink: Locator;
  readonly ladiesOuterwearImageLink: Locator;
  readonly mensTshirtImageLink: Locator;
  readonly ladiesTshirtImageLink: Locator;
  readonly mensOuterwearShopButton: Locator;
  readonly ladiesOuterwearShopButton: Locator;
  readonly mensTshirtsShopButton: Locator;
  readonly ladiesTshirtsShopButton: Locator;
  readonly mensOuterwearHeader: Locator;
  readonly ladiesOuterwearHeader: Locator;
  readonly mensTshirtsHeader: Locator;
  readonly ladiesTshirtsHeader: Locator;
  readonly mensOuterwearImage: Locator;
  readonly ladiesOuterwearImage: Locator;
  readonly mensTshirtsImage: Locator;
  readonly ladiesTshirtsImage: Locator;

    constructor(page: Page) {
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.mensOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
      this.ladiesOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies Outerwear' });
      this.mensTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s T-Shirts' });
      this.ladiesTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies T-Shirts' });
      this.mensOuterwearImageLink = page.getByRole('main').getByRole('link', { name: 'Men\'s Outerwear', exact: true });
      this.ladiesOuterwearImageLink = page.getByRole('main').getByRole('link', {name: 'Ladies Outerwear', exact: true});
      this.mensTshirtImageLink = page.getByRole('main').getByRole('link', { name: 'Men\'s T-Shirts', exact: true });
      this.ladiesTshirtImageLink = page.getByRole('main').getByRole('link', { name: 'Ladies T-Shirts', exact: true });
      this.mensOuterwearShopButton = page.getByLabel('Men\'s Outerwear Shop Now');
      this.ladiesOuterwearShopButton = page.getByLabel('Ladies Outerwear Shop Now');
      this.mensTshirtsShopButton = page.getByLabel('Men\'s T-Shirts Shop Now');
      this.ladiesTshirtsShopButton = page.getByLabel('Ladies T-Shirts Shop Now');
      this.mensOuterwearHeader = page.getByRole('heading', { name: 'Men\'s Outerwear ' });
      this.ladiesOuterwearHeader = page.getByRole('heading', { name: 'Ladies Outerwear ' });
      this.mensTshirtsHeader = page.getByRole('heading', { name: 'Men\'s T-Shirts ' });
      this.ladiesTshirtsHeader = page.getByRole('heading', { name: 'Ladies T-Shirts ' });
      this.mensOuterwearImage = page.getByAltText('Men\'s Outerwear');
      this.ladiesOuterwearImage = page.getByAltText('Ladies Outerwear');
      this.mensTshirtsImage = page.getByAltText('Men\'s T-shirts');
      this.ladiesTshirtsImage = page.getByAltText('Ladies T-shirts');
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
      await this.mensOuterwearImageLink.click();
    }

    async clickLadiesOuterwearImage() {
      await this.ladiesOuterwearImageLink.click();
    }

    async clickMensTshirtsImage() {
      await this.mensTshirtImageLink.click();
    }

    async clickLadiesTshirtsImage() {
      await this.ladiesTshirtImageLink.click();
    }

    async clickMensOuterwearShopButton() {
      await this.mensOuterwearShopButton.click();
    }

    async clickLadiesOuterwearShopButton() {
      await this.ladiesOuterwearShopButton.click();
    }

    async clickMensTshirtsShopButton() {
      await this.mensTshirtsShopButton.click();
    }

    async clickLadiesTshirtsShopButton() {
      await this.ladiesTshirtsShopButton.click();
    }

}