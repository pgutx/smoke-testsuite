import { type Locator, type Page } from '@playwright/test';

export class ProductPage {

  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly mensOuterwearButton: Locator;
  readonly ladiesOuterwearButton: Locator;
  readonly mensTshirtButton: Locator;
  readonly ladiesTshirtButton: Locator;
  readonly backButton: Locator;
  readonly productImg: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly sizeSelect: Locator;
  readonly quantitySelect: Locator;
  readonly productDescription: Locator;
  readonly addToCartButton: Locator;
  readonly dialogPopup: Locator;
  readonly populatedCartButton: Locator;
  readonly viewCartButton: Locator;
  readonly checkoutButton: Locator;
  readonly closeDialogButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 0 items');
      this.mensOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
      this.ladiesOuterwearButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies Outerwear' });
      this.mensTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s T-Shirts' });
      this.ladiesTshirtButton = page.locator('#tabContainer').getByRole('link', { name: 'Ladies T-Shirts' });
      this.backButton = page.getByLabel('Go back');
      this.productImg = page.getByRole('img', { name: 'Men\'s Tech Shell Full-Zip' });
      this.productName = page.getByRole('heading', { name: 'Men\'s Tech Shell Full-Zip' });
      this.productPrice = page.locator('.price');
      this.sizeSelect = page.locator('#sizeSelect');
      this.quantitySelect = page.locator('#quantitySelect');
      this.productDescription = page.locator('.description');
      this.addToCartButton = page.getByLabel('Add this item to cart');
      this.dialogPopup = page.getByRole('dialog');
      this.populatedCartButton = page.getByLabel('Shopping cart: 1 item');
      this.viewCartButton = page.getByRole('link', {name: 'View Cart'});
      this.checkoutButton = page.getByRole('link', {name: 'Checkout'});
      this.closeDialogButton = page.getByLabel('Close dialog');
    }

    async goToProductPage(){
      await this.page.goto('https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip');
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

    async clickBackButton() {
      await this.backButton.click();
    }

    async selectSizeOptionXS() {
      await this.sizeSelect.selectOption('XS');
    }
    
    async selectSizeOptionS() {
      await this.sizeSelect.selectOption('S');
    }

    async selectSizeOptionM() {
      await this.sizeSelect.selectOption('M');
    }

    async selectSizeOptionL() {
      await this.sizeSelect.selectOption('L');
    }

    async selectSizeOptionXL() {
      await this.sizeSelect.selectOption('XL');
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

    async clickAddToCartButton() {
      await this.addToCartButton.click();
    }

    async clickViewCartButton() {
      await this.viewCartButton.click();
    }

    async clickCheckoutButton() {
      await this.checkoutButton.click();
    }

    async clickCloseDialogButton() {
      await this.closeDialogButton.click();
    }

}