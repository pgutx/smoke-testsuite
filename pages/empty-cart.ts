import { type Locator, type Page } from '@playwright/test';

export class EmptyCart {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly emptyCartParagraph: Locator;

    constructor(page: Page){
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.emptyCartParagraph = page.locator('.empty-cart');
    }

    async goToEmptyCartPage(){
      await this.page.goto('https://shop.polymer-project.org/cart');
    }
  
    async clickShopButton() {
      await this.shopButton.click();
    }
  
    async clickCartButton() {
      await this.cartButton.click();
    }
}