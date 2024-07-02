import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ ladiesTshirts }) => {
  await ladiesTshirts.goToLadiesTshirtsPage();
});

test.describe('Smoke Test - Ladies T-Shirts page', () => {

  test('Scenario: User sees the correct URL', async({ ladiesTshirts }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/list/ladies_tshirts is displayed', async () => {

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');

    });

  });

  test('Scenario: User sees the correct Title', async({ ladiesTshirts }) => {

    await test.step('AC: Correct <Title>: Ladies T-shirts - SHOP is displayed', async () => {

      await expect(ladiesTshirts.page).toHaveTitle(/Ladies T-Shirts - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the Ladies T-Shirts page', async ({ ladiesTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(ladiesTshirts.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(ladiesTshirts.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await ladiesTshirts.clickShopButton();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: Cart button is interactable on the Ladies T-Shirts page', async ({ ladiesTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(ladiesTshirts.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(ladiesTshirts.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await ladiesTshirts.clickCartButton();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Men\'s Outerwear button is interactable on the Ladies T-Shirts page', async ({ ladiesTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(ladiesTshirts.ladiesOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(ladiesTshirts.ladiesOuterwearButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await ladiesTshirts.clickLadiesOuterwearButton();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');

    });

  });

  test('Scenario: Ladies Outerwear button is interactable on the Ladies T-Shirts page', async ({ ladiesTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(ladiesTshirts.ladiesOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(ladiesTshirts.ladiesOuterwearButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await ladiesTshirts.clickLadiesOuterwearButton();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');

    });

  });

  test('Scenario: Men\'s T-Shirts button is interactable on the Ladies T-Shirts page', async ({ ladiesTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(ladiesTshirts.ladiesTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(ladiesTshirts.ladiesTshirtButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await ladiesTshirts.clickLadiesTshirtsButton();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');

    });

  });

  test('Scenario: Ladies T-Shirts button is interactable on the Ladies T-Shirts page', async ({ ladiesTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(ladiesTshirts.ladiesTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(ladiesTshirts.ladiesTshirtButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await ladiesTshirts.clickLadiesTshirtsButton();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');

    });

  });

  test('Scenario: Main image is visible on the Ladies T-Shirts page', async ({ ladiesTshirts }) => {

    await test.step('AC: The image is visible', async () => {

      await expect(ladiesTshirts.mainImage).toBeVisible();

    });

  });

  test('Scenario: Ladies T-Shirts header has correct text', async ({ ladiesTshirts }) => {

    await test.step('AC: The heading is visible', async () => {

      await expect(ladiesTshirts.ladiesTshirtsHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Ladies T-Shirts', async () => {

      await expect(ladiesTshirts.ladiesTshirtsHeader).toHaveText(/Ladies T-Shirts/);

    });

  });

  test('Scenario: Items quantity has correct text', async ({ ladiesTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesTshirts.itemsQuantityText).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - (19 items)', async () => {

      await expect(ladiesTshirts.itemsQuantityText).toHaveText(/(19 items)/);

    });

  });

  test('Scenario: First product\'s link is interactable', async ({ ladiesTshirts }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(ladiesTshirts.firstItemLink).toBeVisible();

    });

    await test.step('AC: The product link is enabled', async () =>{

      await expect(ladiesTshirts.firstItemLink).toBeEnabled();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await ladiesTshirts.clickFirstProductLink();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/detail/ladies_tshirts/Ladies+Chrome+T-Shirt');

    });

  });

  test('Scenario: First product has correct name', async ({ ladiesTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesTshirts.firstItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Ladies Chrome T-Shirt', async () => {

      await expect(ladiesTshirts.firstItemName).toHaveText(/Ladies Chrome T-Shirt/);

    });

  });

  test('Scenario: First product has correct price', async ({ ladiesTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesTshirts.firstItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $13.30', async () => {

      await expect(ladiesTshirts.firstItemPrice).toHaveText(/\$13.30/);

    });

  });

  test('Scenario: Middle product\'s link is interactable', async ({ ladiesTshirts }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(ladiesTshirts.middleItemLink).toBeVisible();

    });

    await test.step('AC: The product link is enabled', async () =>{

      await expect(ladiesTshirts.middleItemLink).toBeEnabled();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await ladiesTshirts.clickMiddleProductLink();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/detail/ladies_tshirts/Bella+Scoop-Neck+Ladies+T-Shirt');

    });

  });

  test('Scenario: Middle product has correct name', async ({ ladiesTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesTshirts.middleItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Bella Scoop-Neck Ladies T-Shirt', async () => {

      await expect(ladiesTshirts.middleItemName).toHaveText(/Bella Scoop-Neck Ladies T-Shirt/);

    });

  });

  test('Scenario: Middle product has correct price', async ({ ladiesTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesTshirts.middleItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $13.10', async () => {

      await expect(ladiesTshirts.middleItemPrice).toHaveText(/\$13.10/);

    });

  });

  test('Scenario: Last product\'s link is interactable', async ({ ladiesTshirts }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(ladiesTshirts.lastItemLink).toBeVisible();

    });

    await test.step('AC: The product link is enabled', async () =>{

      await expect(ladiesTshirts.lastItemLink).toBeEnabled();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await ladiesTshirts.clickLastProductLink();

      await expect(ladiesTshirts.page).toHaveURL('https://shop.polymer-project.org/detail/ladies_tshirts/Women+s+Android+Heart+T-Shirt');

    });

  });

  test('Scenario: Last product has correct name', async ({ ladiesTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesTshirts.lastItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Women\'s Android Heart T-Shirt', async () => {

      await expect(ladiesTshirts.lastItemName).toHaveText(/Women's Android Heart T-Shirt/);

    });

  });

  test('Scenario: Last product has correct price', async ({ ladiesTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesTshirts.lastItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $10.60', async () => {

      await expect(ladiesTshirts.lastItemPrice).toHaveText(/\$10.60/);

    });

  });

});