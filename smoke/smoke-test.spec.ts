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

    await test.step('AC: The button is clickable', async() =>{

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

    await test.step('AC: The button is clickable', async() => {

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

    await test.step('AC: The button is clickable', async() => {

      await homePage.clickMensOuterwearButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
      
    });

  });

});