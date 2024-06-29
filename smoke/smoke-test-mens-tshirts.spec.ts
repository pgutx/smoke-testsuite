import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ mensTshirts }) => {
    await mensTshirts.goToMensTshirtsPage();
});

test.describe('Smoke test Men\'s T-Shirts page', () => {

  test('Scenario: User sees the correct URL', async({ mensTshirts }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/list/mens_tshirts is displayed', async () => {

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');

    });

  });

  test('Scenario: User sees the correct Title', async({ mensTshirts }) => {

    await test.step('AC: Correct <Title>: Men\'s T-shirts - SHOP is displayed', async () => {

      await expect(mensTshirts.page).toHaveTitle(/Men's T-Shirts - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the Men\'s Outerwear page', async ({ mensTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(mensTshirts.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(mensTshirts.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await mensTshirts.clickShopButton();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: Cart button is interactable on the Men\'s Outerwear page', async ({ mensTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(mensTshirts.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(mensTshirts.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await mensTshirts.clickCartButton();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Men\'s Outerwear button is interactable on the Men\'s Outerwear page', async ({ mensTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(mensTshirts.mensOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(mensTshirts.mensOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await mensTshirts.clickMensOuterwearButton();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');

    });

  });

  test('Scenario: Ladies Outerwear button is interactable on the Men\'s Outerwear page', async ({ mensTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(mensTshirts.ladiesOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(mensTshirts.ladiesOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await mensTshirts.clickLadiesOuterwearButton();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');

    });

  });

  test('Scenario: Men\'s T-Shirts button is interactable on the Men\'s Outerwear page', async ({ mensTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(mensTshirts.mensTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(mensTshirts.mensTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await mensTshirts.clickMensTshirtsButton();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');

    });

  });

  test('Scenario: Ladies T-Shirts button is interactable on the Men\'s Outerwear page', async ({ mensTshirts }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(mensTshirts.ladiesTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(mensTshirts.ladiesTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await mensTshirts.clickLadiesTshirtsButton();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');

    });

  });

  test('Scenario: Main image is visible on the Men\'s Outerwear page', async ({ mensTshirts }) => {

    await test.step('AC: The image is visible', async () => {

      await expect(mensTshirts.mainImage).toBeVisible();

    });

    await test.step('AC: The image is editable', async () => {

      await expect(mensTshirts.mainImage).toBeEditable();

    });

  });

  test('Scenario: Men\'s Outerwear header has correct text', async ({ mensTshirts }) => {

    await test.step('AC: The heading is visible', async () => {

      await expect(mensTshirts.mensTshirtsHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Men\'s T-Shirts', async () => {

      await expect(mensTshirts.mensTshirtsHeader).toHaveText(/Men's T-Shirts/);

    });

  });

  test('Scenario: Items quantity has correct text', async ({ mensTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensTshirts.itemsQuantityText).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - (40 items)', async () => {

      await expect(mensTshirts.itemsQuantityText).toHaveText(/(40 items)/);

    });

  });

  test('Scenario: First product\'s link is interactable', async ({ mensTshirts }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(mensTshirts.firstItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(mensTshirts.firstItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await mensTshirts.clickFirstProductLink();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/detail/mens_tshirts/YouTube+Organic+Cotton+T-Shirt+-+Grey');

    });

  });

  test('Scenario: First product has correct name', async ({ mensTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensTshirts.firstItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - YouTube Organic Cotton T-Shirt - Grey', async () => {

      await expect(mensTshirts.firstItemName).toHaveText(/YouTube Organic Cotton T-Shirt - Grey/);

    });

  });

  test('Scenario: First product has correct price', async ({ mensTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensTshirts.firstItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $14.75', async () => {

      await expect(mensTshirts.firstItemPrice).toHaveText(/\$14.75/);

    });

  });

  test('Scenario: Middle product\'s link is interactable', async ({ mensTshirts }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(mensTshirts.middleItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(mensTshirts.middleItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await mensTshirts.clickMiddleProductLink();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/detail/mens_tshirts/98+Short+Sleeve+Tee');

    });

  });

  test('Scenario: Middle product has correct name', async ({ mensTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensTshirts.middleItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - 98 Short Sleeve Tee', async () => {

      await expect(mensTshirts.middleItemName).toHaveText(/98 Short Sleeve Tee/);

    });

  });

  test('Scenario: Middle product has correct price', async ({ mensTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensTshirts.middleItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $14.30', async () => {

      await expect(mensTshirts.middleItemPrice).toHaveText(/\$14.30/);

    });

  });

  test('Scenario: Last product\'s link is interactable', async ({ mensTshirts }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(mensTshirts.lastItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(mensTshirts.lastItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await mensTshirts.clickLastProductLink();

      await expect(mensTshirts.page).toHaveURL('https://shop.polymer-project.org/detail/mens_tshirts/Mountain+View+T-Shirt');

    });

  });

  test('Scenario: Last product has correct name', async ({ mensTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensTshirts.lastItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Mountain View T-Shirt', async () => {

      await expect(mensTshirts.lastItemName).toHaveText(/Mountain View T-Shirt/);

    });

  });

  test('Scenario: Last product has correct price', async ({ mensTshirts }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensTshirts.lastItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $16.50', async () => {

      await expect(mensTshirts.lastItemPrice).toHaveText(/\$16.50/);

    });

  });

});