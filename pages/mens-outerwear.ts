import { type Locator, type Page } from '@playwright/test';

export class MensOuterwear {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.shopButton = page.getByLabel('SHOP Home');
        this.cartButton = page.getByLabel('Shopping cart: 0 items');
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
};