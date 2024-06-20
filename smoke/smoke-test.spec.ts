import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomepage();
});

test.describe('Smoke Test - Homepage', () => {

  test('Scenario: User sees the correct URL', async({ homePage }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/ is displayed', async () => {

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: User sees the correct Title', async({ homePage }) => {

    await test.step('AC: Correct <Title>: Home - SHOP is displayed', async () => {

      await expect(homePage.page).toHaveTitle(/Home - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(homePage.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(homePage.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await homePage.clickShopButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/');
      
    });

  });

  test('Scenario: Cart button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(homePage.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(homePage.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickCartButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/cart');
      
    });
    
  });

  test('Scenario: Men\'s Outerwear button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.mensOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {
      
      await expect(homePage.mensOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickMensOuterwearButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
      
    });

  });

  test('Scenario: Ladies Outerwear button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.ladiesOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {
      
      await expect(homePage.ladiesOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickLadiesOuterwearButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');
      
    });

  });

  test('Scenario: Men\'s T-Shirts button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.mensTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {
      
      await expect(homePage.mensTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickMensTshirtsButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');
      
    });

  });

  test('Scenario: Ladies T-Shirts button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.ladiesTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {
      
      await expect(homePage.ladiesTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickLadiesTshirtsButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');
      
    });

  });

  test('Scenario: Men\'s Outerwear image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image is visible', async () => {
      
      await expect(homePage.mensOuterwearImage).toBeVisible();

    });

    await test.step('AC: The image is editable', async () => {
      
      await expect(homePage.mensOuterwearImage).toBeEditable();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickMensOuterwearImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
      
    });

  });

  test('Scenario: Ladies Outerwear image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image is visible', async () => {
      
      await expect(homePage.ladiesOuterwearImage).toBeVisible();

    });

    await test.step('AC: The image is editable', async () => {
      
      await expect(homePage.ladiesOuterwearImage).toBeEditable();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickLadiesOuterwearImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');
      
    });

  });

  test('Scenario: Men\'s T-Shirts image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image is visible', async () => {
      
      await expect(homePage.mensTshirtImage).toBeVisible();

    });

    await test.step('AC: The image is editable', async () => {
      
      await expect(homePage.mensTshirtImage).toBeEditable();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickMensTshirtsImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');
      
    });

  });

  test('Scenario: Ladies T-Shirts image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image is visible', async () => {
      
      await expect(homePage.ladiesTshirtImage).toBeVisible();

    });

    await test.step('AC: The image is editable', async () => {
      
      await expect(homePage.ladiesTshirtImage).toBeEditable();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickLadiesTshirtsImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');
      
    });

  });

});