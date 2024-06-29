import { type Locator, type Page } from '@playwright/test';

export class LadiesTshirts {
    
  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;
  readonly mainImage: Locator;
  readonly ladiesTshirtsHeader: Locator;
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
      this.mainImage = page.getByRole('img', { name: 'Ladies T-Shirts' });
      this.ladiesTshirtsHeader = page.getByRole('heading', { name: 'Ladies T-Shirts' });
      this.itemsQuantityText = page.getByText('(19 items)');
      this.firstItemLink = page.getByRole('link', { name: 'Ladies Chrome T-Shirt Ladies' });
      this.firstItemName = page.getByText('Ladies Chrome T-Shirt');
      this.firstItemPrice = page.getByRole('link', { name: 'Ladies Chrome T-Shirt Ladies' }).getByText('$13.30');
      this.middleItemLink = page.getByRole('link', { name: 'Bella Scoop-Neck Ladies T-' });
      this.middleItemName = page.getByText('Bella Scoop-Neck Ladies T-Shirt');
      this.middleItemPrice = page.getByRole('link', { name: 'Bella Scoop-Neck Ladies T-' }).getByText('$13.10');
      this.lastItemLink = page.getByRole('link', { name: 'Women\'s Android Heart T-Shirt' });
      this.lastItemName = page.getByText('Women\'s Android Heart T-Shirt');
      this.lastItemPrice = page.getByRole('link', { name: 'Women\'s Android Heart T-Shirt' }).getByText('$10.60');
    }

    async goToLadiesTshirtsPage() {
      await this.page.goto('https://shop.polymer-project.org/list/ladies_tshirts');
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