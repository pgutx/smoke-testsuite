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

});