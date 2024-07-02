import { type Locator, type Page } from '@playwright/test';

export class PopulatedCart {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly populatedCartElement: Locator;
  readonly cartHeading: Locator;
  readonly itemNumber: Locator;
  readonly itemImage: Locator;
  readonly itemName: Locator;
  readonly quantitySelect: Locator;
  readonly sizeField: Locator;
  readonly priceField: Locator;
  readonly deleteItemButton: Locator;
  readonly emptyCartParagraph: Locator;
  readonly totalPriceField: Locator;
  readonly checkoutButton: Locator;

    constructor(page: Page){

      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 1 item');
      this.populatedCartElement = page.locator('.main-frame');
      this.cartHeading = page.getByRole('heading', { name: 'Your Cart' });
      this.itemNumber = page.getByText('(1 item)');
      this.itemImage = page.getByRole('img', { name: 'Men\'s Tech Shell Full-Zip'});
      this.itemName = page.locator('shop-cart-item').getByText('Men\'s Tech Shell Full-Zip');
      this.quantitySelect = page.getByLabel('Change quantity');
      this.sizeField = page.locator('.size');
      this.priceField = page.locator('shop-cart-item').getByText('$');
      this.deleteItemButton = page.locator('.delete-button');
      this.emptyCartParagraph = page.locator('.empty-cart');
      this.totalPriceField = page.locator('.subtotal');
      this.checkoutButton = page.getByRole('link', { name: 'Checkout' });

    }

    async clickShopButton() {
      await this.shopButton.click();
    }
    
    async clickCartButton() {
      await this.cartButton.click();
    }

    async clickItemImage() {
      await this.itemImage.click();
    }

    async clickItemName() {
      await this.itemName.click();
    }

    async selectQuantityOption1() {
      await this.quantitySelect.selectOption('1');
    }

    async selectQuantityOption2() {
      await this.quantitySelect.selectOption('2');
    }

    async selectQuantityOption3() {
      await this.quantitySelect.selectOption('3');
    }

    async selectQuantityOption4() {
      await this.quantitySelect.selectOption('4');
    }

    async selectQuantityOption5() {
      await this.quantitySelect.selectOption('5');
    }

    async selectQuantityOption6() {
      await this.quantitySelect.selectOption('6');
    }

    async selectQuantityOption7() {
      await this.quantitySelect.selectOption('7');
    }

    async selectQuantityOption8() {
      await this.quantitySelect.selectOption('8');
    }

    async selectQuantityOption9() {
      await this.quantitySelect.selectOption('9');
    }

    async selectQuantityOption10() {
      await this.quantitySelect.selectOption('10');
    }

    async selectQuantityOption11() {
      await this.quantitySelect.selectOption('11');
    }

    async selectQuantityOption12() {
      await this.quantitySelect.selectOption('12');
    }

    async clickDeleteItemButton() {
      await this.deleteItemButton.click();
    }

    async clickCheckoutButton() {
      await this.checkoutButton.click();
    }

}