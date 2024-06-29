import { type Locator, type Page } from '@playwright/test';

export class MensTshirts {
    
  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;
  readonly mainImage: Locator;
  readonly mensTshirtsHeader: Locator;
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

    constructor(page: Page){
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.mensOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
      this.ladiesOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies Outerwear' });
      this.mensTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s T-Shirts' });
      this.ladiesTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies T-Shirts' });
      this.mainImage = page.getByRole('img', { name: 'Men\'s T-Shirts' });
      this.mensTshirtsHeader = page.getByRole('heading', { name: 'Men\'s T-Shirts' });
      this.itemsQuantityText = page.getByText('(40 items)');
      this.firstItemLink = page.getByRole('link', { name: 'YouTube Organic Cotton T-' });
      this.firstItemName = page.getByText('YouTube Organic Cotton T-Shirt - Grey');
      this.firstItemPrice = page.getByRole('link', { name: 'YouTube Organic Cotton T-' }).getByText('$14.75');
      this.middleItemLink = page.getByRole('link', { name: '98 Short Sleeve Tee 98 Short' });
      this.middleItemName = page.getByText('98 Short Sleeve Tee');
      this.middleItemPrice = page.getByRole('link', { name: '98 Short Sleeve Tee 98 Short' }).getByText('$14.30');
      this.lastItemLink = page.getByRole('link', { name: 'Mountain View T-Shirt' });
      this.lastItemName = page.getByText('Mountain View T-Shirt');
      this.lastItemPrice = page.getByRole('link', { name: 'Mountain View T-Shirt' }).getByText('$16.50');
    }

    async goToMensTshirtsPage() {
      await this.page.goto('https://shop.polymer-project.org/list/mens_tshirts');
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

    async clickMiddleProductLink() {
      await this.middleItemLink.click();
    }

    async clickLastProductLink() {
      await this.lastItemLink.click();
    }

}