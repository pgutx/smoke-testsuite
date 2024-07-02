import { type Locator, type Page } from '@playwright/test';
import { formVariables } from '../utilities/form-data';

export class Checkout {
  
  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly formField: Locator;
  readonly emailField: Locator;
  readonly phoneField: Locator;

    constructor(page: Page){
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 1 item');
      this.formField = page.locator('#checkoutForm');
      this.emailField = page.getByPlaceholder('Email');
      this.phoneField = page.getByPlaceholder('Phone Number');
    }

    async clickShopButton() {
      await this.shopButton.click();
    }
      
    async clickCartButton() {
      await this.cartButton.click();
    }

    async fillEmailField() {
      await this.emailField.fill(formVariables.email);
    }

    async fillPhoneField() {
      await this.phoneField.fill(formVariables.phone);
    }

}