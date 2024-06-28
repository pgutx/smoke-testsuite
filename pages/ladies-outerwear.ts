import { type Locator, type Page } from '@playwright/test';

export class LadiesOuterwear {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;
  readonly mainImage: Locator;
  readonly ladiesOuterwearHeader: Locator;
  readonly itemsQuantityText: Locator;
  readonly firstItemLink: Locator;
  readonly firstItemName: Locator;
  readonly firstItemPrice: Locator;
  readonly middleItemLink: Locator;
  readonly middleItemName: Locator;
  readonly middleItemPrice: Locator;
  readonly lastItemLink: Locator;
  readonly lastItemName: Locator;
  readonly lastItemPrice: Locator;

  constructor (page: Page){
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.mensOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
      this.ladiesOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies Outerwear' });
      this.mensTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s T-Shirts' });
      this.ladiesTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies T-Shirts' });
      this.mainImage = page.getByRole('link', { name: 'Ladies Outerwear' });
      this.ladiesOuterwearHeader = page.getByRole('heading', {name: 'Ladies Outerwear' });
      this.itemsQuantityText = page.getByText('(6 items)');
      this.firstItemLink = page.getByRole('link', { name: 'Ladies Modern Stretch Full' });
      this.firstItemName = page.getByText('Ladies Modern Stretch Full Zip');
      this.firstItemPrice = page.getByRole('link', { name: 'Ladies Modern Stretch Full' }).getByText('$41.60');
      this.lastItemLink = page.getByRole('link', { name: 'Ladies Yerba Knit Quarter Zip' });
      this.lastItemName = page.getByText('Ladies Yerba Knit Quarter Zip');
      this.lastItemPrice = page.getByRole('link', { name: 'Ladies Yerba Knit Quarter Zip' }).getByText('$64.20');
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

  async clickFirstProductLink() {
    await this.firstItemLink.click();
  }

  async clickLastProductLink() {
    await this.lastItemLink.click();
  }

};
