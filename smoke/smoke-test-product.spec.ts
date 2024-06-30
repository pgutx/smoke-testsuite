import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ productPage }) => {
    await productPage.goToProductPage();
});

test.describe('Smoke Test - Product page', () => {

  test('Scenario: User sees the correct URL', async({ productPage }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip is displayed', async () => {

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip');

    });

  });

  test('Scenario: User sees the correct Title', async({ productPage }) => {

    await test.step('AC: Correct <Title>: Men\'s Tech Schell Full-Zip - SHOP is displayed', async () => {

      await expect(productPage.page).toHaveTitle(/Men's Tech Shell Full-Zip - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(productPage.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await productPage.clickShopButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: Cart button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(productPage.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickCartButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Men\'s Outerwear button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.mensOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.mensOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickMensOuterwearButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');

    });

  });

  test('Scenario: Ladies Outerwear button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.ladiesOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.ladiesOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickLadiesOuterwearButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');

    });

  });

  test('Scenario: Men\'s T-Shirts button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.mensTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.mensTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickMensTshirtsButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');

    });

  });

  test('Scenario: Ladies T-Shirts button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.ladiesTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.ladiesTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickLadiesTshirtsButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');

    });

  });

  test('Scenario: Back button button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.backButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.backButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickBackButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');

    });

  });

});