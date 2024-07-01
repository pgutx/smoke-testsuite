import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ emptyCart }) => {
    await emptyCart.goToEmptyCartPage();
});

test.describe('Smoke Test - Empty cart page', () => {

  test('Scenario: User sees the correct URL', async({ emptyCart }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/cart is displayed', async () => {

      await expect(emptyCart.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: User sees the correct Title', async({ emptyCart }) => {

    await test.step('AC: Correct <Title>: Your cart - SHOP is displayed', async () => {

      await expect(emptyCart.page).toHaveTitle(/Your cart - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the empty cart page', async ({ emptyCart }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(emptyCart.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(emptyCart.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await emptyCart.clickShopButton();

      await expect(emptyCart.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: Cart button is interactable on the empty cart page', async ({ emptyCart }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(emptyCart.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(emptyCart.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await emptyCart.clickCartButton();

      await expect(emptyCart.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Main paragraph is visible', async ({ emptyCart }) => {
    
    await test.step('AC: The paragraph is visible', async () => {

      await expect(emptyCart.emptyCartParagraph).toBeVisible();

    });

  });

});