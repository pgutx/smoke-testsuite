import { test, expect } from '../utilities/fixtures';
import { formVariables } from '../utilities/form-data';

test.describe('Smoke Test - Checkout', () => {

  test('Scenario: User sees the correct URL', async({ checkoutPage }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/checkout is displayed', async () => {

      await expect(checkoutPage.page).toHaveURL('https://shop.polymer-project.org/checkout');

    });

  });

  test('Scenario: User sees the correct Title', async({ checkoutPage }) => {

    await test.step('AC: Correct <Title>: Checkout - SHOP is displayed', async () => {

      await expect(checkoutPage.page).toHaveTitle(/Checkout - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the checkout page', async ({ checkoutPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(checkoutPage.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(checkoutPage.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await checkoutPage.clickShopButton();

      await expect(checkoutPage.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: Cart button is interactable on the checkout page', async ({ checkoutPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(checkoutPage.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(checkoutPage.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await checkoutPage.clickCartButton();

      await expect(checkoutPage.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Form field is visible', async ({ checkoutPage }) => {
    
    await test.step('AC: The form is visible', async () => {

      await expect(checkoutPage.formField).toBeVisible();  

    });

  });

  test('Scenario: Email field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.emailField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.emailField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillEmailField();

      await expect(checkoutPage.emailField).toHaveValue(formVariables.email);
  
    });

  });

  test('Scenario: Phone field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.phoneField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.phoneField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillPhoneField();

      await expect(checkoutPage.phoneField).toHaveValue(formVariables.phone);
  
    });

  });

  test('Scenario: Ship Address field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.shipAddressField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.shipAddressField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillShipAddressField();

      await expect(checkoutPage.shipAddressField).toHaveValue(formVariables.address);
  
    });

  });

  test('Scenario: Ship City field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.shipCityField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.shipCityField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillShipCityField();

      await expect(checkoutPage.shipCityField).toHaveValue(formVariables.city);
  
    });

  });

  test('Scenario: Ship State/Province field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.shipStateField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.shipStateField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillShipStateField();

      await expect(checkoutPage.shipStateField).toHaveValue(formVariables.state);
  
    });

  });

  test('Scenario: Ship Zip/Postal Code field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.shipZipField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.shipZipField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillShipZipField();

      await expect(checkoutPage.shipZipField).toHaveValue(formVariables.zip);
  
    });

  });

  test('Scenario: Ship country option is interactable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.shipCountryOption).toBeVisible();  

    });

    await test.step('AC: The field is enabled', async () => {

      await expect(checkoutPage.shipCountryOption).toBeEnabled();
  
    });

    await test.step('AC: Correct option is available - USA', async () => {

      await checkoutPage.selectShipCountryOptionUSA();

      await expect(checkoutPage.shipCountryOption).toHaveValue(/US/);

      await expect(checkoutPage.shipCountryOption).toHaveText(/United States/);
  
    });

    await test.step('AC: Correct option is available - Canada', async () => {

      await checkoutPage.selectShipCountryOptionCanada();

      await expect(checkoutPage.shipCountryOption).toHaveValue(/CA/);

      await expect(checkoutPage.shipCountryOption).toHaveText(/Canada/);
  
    });

  });

  test('Scenario: Billing Address checkbox can be interacted with', async ({ checkoutPage }) => {
    
    await test.step('AC: The checkbox is visible', async () => {

      await expect(checkoutPage.setBillingCheckbox).toBeVisible();  

    });

    await test.step('AC: The checkbox is enabled', async () => {

      await expect(checkoutPage.setBillingCheckbox).toBeEnabled();
  
    });

    await test.step('AC: Billing form is visible', async () => {

      await checkoutPage.clickSetBillingCheckbox();

      await expect(checkoutPage.billingAddressField).toBeVisible();

      await expect(checkoutPage.billingCityField).toBeVisible();

      await expect(checkoutPage.billingStateField).toBeVisible();

      await expect(checkoutPage.billingZipField).toBeVisible();

      await expect(checkoutPage.billingCountryOption).toBeVisible();
  
    });

  });

  test('Scenario: Billing Address field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await checkoutPage.clickSetBillingCheckbox();

      await expect(checkoutPage.billingAddressField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.billingAddressField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillBillingAddressField();

      await expect(checkoutPage.billingAddressField).toHaveValue(formVariables.address);
  
    });

  });

  test('Scenario: Billing City field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await checkoutPage.clickSetBillingCheckbox();

      await expect(checkoutPage.billingCityField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.billingCityField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillBillingCityField();

      await expect(checkoutPage.billingCityField).toHaveValue(formVariables.city);
  
    });

  });

  test('Scenario: Billing State/Province field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await checkoutPage.clickSetBillingCheckbox();

      await expect(checkoutPage.billingStateField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.billingStateField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillBillingStateField();

      await expect(checkoutPage.billingStateField).toHaveValue(formVariables.state);
  
    });

  });

  test('Scenario: Billing Zip/Postal Code field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await checkoutPage.clickSetBillingCheckbox();

      await expect(checkoutPage.billingZipField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.billingZipField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillBillingZipField();

      await expect(checkoutPage.billingZipField).toHaveValue(formVariables.zip);
  
    });

  });

  test('Scenario: Billing country option is interactable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await checkoutPage.clickSetBillingCheckbox();

      await expect(checkoutPage.billingCountryOption).toBeVisible();  

    });

    await test.step('AC: The field is enabled', async () => {

      await expect(checkoutPage.billingCountryOption).toBeEnabled();
  
    });

    await test.step('AC: Correct option is available - USA', async () => {

      await checkoutPage.selectBillingCountryOptionUSA();

      await expect(checkoutPage.billingCountryOption).toHaveValue(/US/);

      await expect(checkoutPage.billingCountryOption).toHaveText(/United States/);
  
    });

    await test.step('AC: Correct option is available - Canada', async () => {

      await checkoutPage.selectBillingCountryOptionCanada();

      await expect(checkoutPage.billingCountryOption).toHaveValue(/CA/);

      await expect(checkoutPage.billingCountryOption).toHaveText(/Canada/);
  
    });

  });

  test('Scenario: Cardholder field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.cardholderNameField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.cardholderNameField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillCardholderNameField();

      await expect(checkoutPage.cardholderNameField).toHaveValue(formVariables.ccholder);
  
    });

  });

  test('Scenario: Card Number field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.cardNumberField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.cardNumberField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillCardNumberField();

      await expect(checkoutPage.cardNumberField).toHaveValue(formVariables.card);
  
    });

  });

  test('Scenario: Expiry month option is interactable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.expiryMonthOption).toBeVisible();  

    });

    await test.step('AC: The field is enabled', async () => {

      await expect(checkoutPage.expiryMonthOption).toBeEnabled();
  
    });

    await test.step('AC: Correct option is available - Jan', async () => {

      await checkoutPage.selectExpiryMonthOptionJan();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/01/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Jan/);
  
    });

    await test.step('AC: Correct option is available - Feb', async () => {

      await checkoutPage.selectExpiryMonthOptionFeb();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/02/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Feb/);
  
    });

    await test.step('AC: Correct option is available - Mar', async () => {

      await checkoutPage.selectExpiryMonthOptionMar();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/03/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Mar/);
  
    });

    await test.step('AC: Correct option is available - Apr', async () => {

      await checkoutPage.selectExpiryMonthOptionApr();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/04/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Apr/);
  
    });

    await test.step('AC: Correct option is available - May', async () => {

      await checkoutPage.selectExpiryMonthOptionMay();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/05/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/May/);
  
    });

    await test.step('AC: Correct option is available - Jun', async () => {

      await checkoutPage.selectExpiryMonthOptionJun();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/06/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Jun/);
  
    });

    await test.step('AC: Correct option is available - Jul', async () => {

      await checkoutPage.selectExpiryMonthOptionJul();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/07/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Jul/);
  
    });

    await test.step('AC: Correct option is available - Aug', async () => {

      await checkoutPage.selectExpiryMonthOptionAug();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/08/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Aug/);
  
    });

    await test.step('AC: Correct option is available - Sep', async () => {

      await checkoutPage.selectExpiryMonthOptionSep();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/09/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Sep/);
  
    });

    await test.step('AC: Correct option is available - Oct', async () => {

      await checkoutPage.selectExpiryMonthOptionOct();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/10/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Oct/);
  
    });

    await test.step('AC: Correct option is available - Nov', async () => {

      await checkoutPage.selectExpiryMonthOptionNov();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/11/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Nov/);
  
    });

    await test.step('AC: Correct option is available - Dec', async () => {

      await checkoutPage.selectExpiryMonthOptionDec();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/12/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Dec/);
  
    });

  });

  test('Scenario: Expiry year option is interactable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.expiryYearOption).toBeVisible();  

    });

    await test.step('AC: The field is enabled', async () => {

      await expect(checkoutPage.expiryYearOption).toBeEnabled();
  
    });

    await test.step('AC: Correct option is available - 2016', async () => {

      await checkoutPage.selectExpiryYearOption2016();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2016/);

    });

    await test.step('AC: Correct option is available - 2017', async () => {

      await checkoutPage.selectExpiryYearOption2017();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2017/);

    });

    await test.step('AC: Correct option is available - 2018', async () => {

      await checkoutPage.selectExpiryYearOption2018();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2018/);

    });

    await test.step('AC: Correct option is available - 2019', async () => {

      await checkoutPage.selectExpiryYearOption2019();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2019/);

    });

    await test.step('AC: Correct option is available - 2020', async () => {

      await checkoutPage.selectExpiryYearOption2020();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2020/);

    });

    await test.step('AC: Correct option is available - 2021', async () => {

      await checkoutPage.selectExpiryYearOption2021();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2021/);

    });

    await test.step('AC: Correct option is available - 2022', async () => {

      await checkoutPage.selectExpiryYearOption2022();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2022/);
  
    });

    await test.step('AC: Correct option is available - 2023', async () => {

      await checkoutPage.selectExpiryYearOption2023();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2023/);
  
    });

    await test.step('AC: Correct option is available - 2024', async () => {

      await checkoutPage.selectExpiryYearOption2024();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2024/);
  
    });

    await test.step('AC: Correct option is available - 2025', async () => {

      await checkoutPage.selectExpiryYearOption2025();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2025/);
  
    });

    await test.step('AC: Correct option is available - 2026', async () => {

      await checkoutPage.selectExpiryYearOption2026();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2026/);
  
    });

  });

  test('Scenario: CVV Number field is fillable', async ({ checkoutPage }) => {
    
    await test.step('AC: The field is visible', async () => {

      await expect(checkoutPage.cvvField).toBeVisible();  

    });

    await test.step('AC: The field is editable', async () => {

      await expect(checkoutPage.cvvField).toBeEditable();
  
    });

    await test.step('AC: The field is fillable', async () => {

      await checkoutPage.fillCVVField();

      await expect(checkoutPage.cvvField).toHaveValue(formVariables.cvv);
  
    });

  });

  test('Scenario: User can place the order', async ({ checkoutPage }) => {

    await test.step('AC: Form is visible', async () => {

      await expect(checkoutPage.formField).toBeVisible();

    });

    await test.step('AC: Fill email', async () => {

      await checkoutPage.fillEmailField(); 

      await expect(checkoutPage.emailField).toHaveValue(formVariables.email);

    });

    await test.step('AC: Fill phone number', async () => {

      await checkoutPage.fillPhoneField();

      await expect(checkoutPage.phoneField).toHaveValue(formVariables.phone);
  
    });

    await test.step('AC: Fill address', async () => {

      await checkoutPage.fillShipAddressField();

      await expect(checkoutPage.shipAddressField).toHaveValue(formVariables.address);
  
    });

    await test.step('AC: Fill city', async () => {

      await checkoutPage.fillShipCityField();

      await expect(checkoutPage.shipCityField).toHaveValue(formVariables.city);

    });

    await test.step('AC: Fill state/province', async () => {

      await checkoutPage.fillShipStateField();

      await expect(checkoutPage.shipStateField).toHaveValue(formVariables.state);
  
    });

    await test.step('AC: Fill zip', async () => {

      await checkoutPage.fillShipZipField();

      await expect(checkoutPage.shipZipField).toHaveValue(formVariables.zip);

    });

    await test.step('AC: Select country', async () => {

      await checkoutPage.selectShipCountryOptionCanada();

      await expect(checkoutPage.shipCountryOption).toHaveValue(/CA/);
  
    });

    await test.step('AC: Fill cardholder name', async () => {

      await checkoutPage.fillCardholderNameField();

      await expect(checkoutPage.cardholderNameField).toHaveValue(formVariables.ccholder);

    });

    await test.step('AC: Fill card number', async () => {

      await checkoutPage.fillCardNumberField();

      await expect(checkoutPage.cardNumberField).toHaveValue(formVariables.card);
  
    });

    await test.step('AC: Select month', async () => {

      await checkoutPage.selectExpiryMonthOptionJul();

      await expect(checkoutPage.expiryMonthOption).toHaveValue(/07/);

      await expect(checkoutPage.expiryMonthOption).toHaveText(/Jul/);

    });

    await test.step('AC: Select year', async () => {

      await checkoutPage.selectExpiryYearOption2024();

      await expect(checkoutPage.expiryYearOption).toHaveValue(/2024/);
  
    });

    await test.step('AC: Fill CVV', async () => {

      await checkoutPage.fillCVVField();

      await expect(checkoutPage.cvvField).toHaveValue(formVariables.cvv);

    });

    await test.step('AC: Click place order', async () => {

      await checkoutPage.clickPlaceOrderButton();

      await expect(checkoutPage.checkoutComplete).toBeVisible();
  
    });

  });

});