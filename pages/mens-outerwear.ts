import { type Locator, type Page } from '@playwright/test';

export class MensOuterwear {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;
  readonly mainImage: Locator;
  readonly mensOuterwearHeader: Locator;
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
        this.mainImage = page.getByRole('img', { name: 'Men\'s Outerwear' });
        this.mensOuterwearHeader = page.getByRole('heading', { name: 'Men\'s Outerwear ' });
        this.itemsQuantityText = page.getByText('(16 items)');
        this.firstItemLink = page.getByRole('link', { name: 'Men\'s Tech Shell Full-Zip Men' });
        this.firstItemName = page.getByText('Men\'s Tech Shell Full-Zip');
        this.firstItemPrice = page.getByRole('link', { name: 'Men\'s Tech Shell Full-Zip Men' }).getByText('$50.20');
        this.middleItemLink = page.getByRole('link', { name: 'Recycled Plastic Bottle' });
        this.middleItemName = page.getByText('Recycled Plastic Bottle Hoodie - Green');
        this.middleItemPrice = page.getByRole('link', { name: 'Recycled Plastic Bottle' }).getByText('$60.95');
        this.lastItemLink = page.getByRole('link', { name: 'YouTube Unisex Flex Fleece' });
        this.lastItemName = page.getByText('YouTube Unisex Flex Fleece Zip Hoodie');
        this.lastItemPrice = page.getByRole('link', { name: 'YouTube Unisex Flex Fleece' }).getByText('$45.25');
    }

    async goToMensOuterwearPage() {
        await this.page.goto('https://shop.polymer-project.org/list/mens_outerwear');
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
};