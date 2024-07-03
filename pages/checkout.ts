import { type Locator, type Page } from '@playwright/test';
import { formVariables } from '../utilities/form-data';

export class Checkout {
  
  readonly page: Page;
  readonly shopButton: Locator;
  readonly cartButton: Locator;
  readonly formField: Locator;
  readonly emailField: Locator;
  readonly phoneField: Locator;
  readonly shipAddressField: Locator;
  readonly shipCityField: Locator;
  readonly shipStateField: Locator;
  readonly shipZipField: Locator;
  readonly shipCountryOption: Locator;
  readonly setBillingCheckbox: Locator;
  readonly billingAddressField: Locator;
  readonly billingCityField: Locator;
  readonly billingStateField: Locator;
  readonly billingZipField: Locator;
  readonly billingCountryOption: Locator;
  readonly cardholderNameField: Locator;
  readonly cardNumberField: Locator;
  readonly expiryMonthOption: Locator;
  readonly expiryYearOption: Locator;
  readonly cvvField: Locator;
  readonly placeOrderButton: Locator;
  readonly checkoutComplete: Locator;

    constructor(page: Page){
      this.page = page;
      this.shopButton = page.getByLabel('SHOP Home');
      this.cartButton = page.getByLabel('Shopping cart: 1 item');
      this.formField = page.locator('#checkoutForm');
      this.emailField = page.getByPlaceholder('Email');
      this.phoneField = page.getByPlaceholder('Phone Number');
      this.shipAddressField = page.locator('#shipAddress');
      this.shipCityField = page.locator('#shipCity');
      this.shipStateField = page.locator('#shipState');
      this.shipZipField = page.locator('#shipZip');
      this.shipCountryOption = page.locator('#shipCountry');
      this.setBillingCheckbox = page.locator('#setBilling');
      this.billingAddressField = page.locator('#billAddress');
      this.billingCityField = page.locator('#billCity');
      this.billingStateField = page.locator('#billState');
      this.billingZipField = page.locator('#billZip');
      this.billingCountryOption = page.locator('#billCountry');
      this.cardholderNameField = page.getByPlaceholder('Cardholder Name');
      this.cardNumberField = page.getByPlaceholder('Card Number');
      this.expiryMonthOption = page.getByLabel('Expiry month');
      this.expiryYearOption = page.getByLabel('Expiry year');
      this.cvvField = page.getByPlaceholder('CVV');
      this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
      this.checkoutComplete = page.getByText('Demo checkout process complete.');

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

    async fillShipAddressField() {
      await this.shipAddressField.fill(formVariables.address);
    }

    async fillShipCityField() {
      await this.shipCityField.fill(formVariables.city);
    }

    async fillShipStateField() {
      await this.shipStateField.fill(formVariables.state);
    }

    async fillShipZipField() {
      await this.shipZipField.fill(formVariables.zip);
    }

    async selectShipCountryOptionUSA() {
      await this.shipCountryOption.selectOption('US');
    }

    async selectShipCountryOptionCanada() {
      await this.shipCountryOption.selectOption('CA');
    }

    async clickSetBillingCheckbox() {
      await this.setBillingCheckbox.click();
    }

    async fillBillingAddressField() {
      await this.billingAddressField.fill(formVariables.address);
    }

    async fillBillingCityField() {
      await this.billingCityField.fill(formVariables.city);
    }

    async fillBillingStateField() {
      await this.billingStateField.fill(formVariables.state);
    }

    async fillBillingZipField() {
      await this.billingZipField.fill(formVariables.zip);
    }

    async selectBillingCountryOptionUSA() {
      await this.billingCountryOption.selectOption('US');
    }

    async selectBillingCountryOptionCanada() {
      await this.billingCountryOption.selectOption('CA');
    }

    async fillCardholderNameField() {
      await this.cardholderNameField.fill(formVariables.ccholder);
    }

    async fillCardNumberField() {
      await this.cardNumberField.fill(formVariables.card);
    }

    async selectExpiryMonthOptionJan() {
      await this.expiryMonthOption.selectOption('01');
    }

    async selectExpiryMonthOptionFeb() {
      await this.expiryMonthOption.selectOption('02');
    }

    async selectExpiryMonthOptionMar() {
      await this.expiryMonthOption.selectOption('03');
    }

    async selectExpiryMonthOptionApr() {
      await this.expiryMonthOption.selectOption('04');
    }

    async selectExpiryMonthOptionMay() {
      await this.expiryMonthOption.selectOption('05');
    }

    async selectExpiryMonthOptionJun() {
      await this.expiryMonthOption.selectOption('06');
    }

    async selectExpiryMonthOptionJul() {
      await this.expiryMonthOption.selectOption('07');
    }

    async selectExpiryMonthOptionAug() {
      await this.expiryMonthOption.selectOption('08');
    }

    async selectExpiryMonthOptionSep() {
      await this.expiryMonthOption.selectOption('09');
    }

    async selectExpiryMonthOptionOct() {
      await this.expiryMonthOption.selectOption('10');
    }

    async selectExpiryMonthOptionNov() {
      await this.expiryMonthOption.selectOption('11');
    }

    async selectExpiryMonthOptionDec() {
      await this.expiryMonthOption.selectOption('12');
    }

    async selectExpiryYearOption2016() {
      await this.expiryYearOption.selectOption('2016');
    }

    async selectExpiryYearOption2017() {
      await this.expiryYearOption.selectOption('2017');
    }

    async selectExpiryYearOption2018() {
      await this.expiryYearOption.selectOption('2018');
    }

    async selectExpiryYearOption2019() {
      await this.expiryYearOption.selectOption('2019');
    }

    async selectExpiryYearOption2020() {
      await this.expiryYearOption.selectOption('2020');
    }

    async selectExpiryYearOption2021() {
      await this.expiryYearOption.selectOption('2021');
    }

    async selectExpiryYearOption2022() {
      await this.expiryYearOption.selectOption('2022');
    }

    async selectExpiryYearOption2023() {
      await this.expiryYearOption.selectOption('2023');
    }

    async selectExpiryYearOption2024() {
      await this.expiryYearOption.selectOption('2024');
    }

    async selectExpiryYearOption2025() {
      await this.expiryYearOption.selectOption('2025');
    }

    async selectExpiryYearOption2026() {
      await this.expiryYearOption.selectOption('2026');
    }

    async fillCVVField() {
      await this.cvvField.fill(formVariables.cvv);
    }

    async clickPlaceOrderButton() {
      await this.placeOrderButton.click();
    }

}