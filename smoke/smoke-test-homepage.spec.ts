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

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.mensOuterwearButton).toBeEnabled();

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

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.ladiesOuterwearButton).toBeEnabled();

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

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.mensTshirtButton).toBeEnabled();

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

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.ladiesTshirtButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickLadiesTshirtsButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');
      
    });

  });

  test('Scenario: Men\'s Outerwear image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image link is visible', async () => {
      
      await expect(homePage.mensOuterwearImageLink).toBeVisible();

    });

    await test.step('AC: The image link is enabled', async () => {
      
      await expect(homePage.mensOuterwearImageLink).toBeEnabled();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickMensOuterwearImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
      
    });

  });

  test('Scenario: Ladies Outerwear image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image link is visible', async () => {
      
      await expect(homePage.ladiesOuterwearImageLink).toBeVisible();

    });

    await test.step('AC: The image link is enabled', async () => {
      
      await expect(homePage.ladiesOuterwearImageLink).toBeEnabled();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickLadiesOuterwearImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');
      
    });

  });

  test('Scenario: Men\'s T-Shirts image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image link is visible', async () => {
      
      await expect(homePage.mensTshirtImageLink).toBeVisible();

    });

    await test.step('AC: The image link is enabled', async () => {
      
      await expect(homePage.mensTshirtImageLink).toBeEnabled();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickMensTshirtsImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');
      
    });

  });

  test('Scenario: Ladies T-Shirts image is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The image link is visible', async () => {
      
      await expect(homePage.ladiesTshirtImageLink).toBeVisible();

    });

    await test.step('AC: The image link is enabled', async () => {
      
      await expect(homePage.ladiesTshirtImageLink).toBeEnabled();

    });

    await test.step('AC: The image leads to correct URL', async() => {

      await homePage.clickLadiesTshirtsImage();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');
      
    });

  });

  test('Scenario: Men\'s Outerwear Shop Now button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.mensOuterwearShopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.mensOuterwearShopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickMensOuterwearShopButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
      
    });

  });

  test('Scenario: Ladies Outerwear Shop Now button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.ladiesOuterwearShopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.ladiesOuterwearShopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickLadiesOuterwearShopButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');
      
    });

  });

  test('Scenario: Men\'s T-Shirts Shop Now button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.mensTshirtsShopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.mensTshirtsShopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickMensTshirtsShopButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');
      
    });

  });

  test('Scenario: Ladies T-Shirts Shop Now button is interactable on the homepage', async ({ homePage }) => {

    await test.step('AC: The button is visible', async () => {
      
      await expect(homePage.ladiesTshirtsShopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {
      
      await expect(homePage.ladiesTshirtsShopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await homePage.clickLadiesTshirtsShopButton();

      await expect(homePage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');
      
    });

  });

  test('Scenario: Men\'s Outerwear header has correct text', async ({ homePage }) => {
    
    await test.step('AC: The heading is visible', async () => {

      await expect(homePage.mensOuterwearHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Men\'s Outerwear', async () => {

      await expect(homePage.mensOuterwearHeader).toHaveText(/Men's Outerwear/);

    });

  });

  test('Scenario: Ladies Outerwear header has correct text', async ({ homePage }) => {
    
    await test.step('AC: The heading is visible', async () => {

      await expect(homePage.ladiesOuterwearHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Ladies Outerwear', async () => {

      await expect(homePage.ladiesOuterwearHeader).toHaveText(/Ladies Outerwear/);

    });

  });

  test('Scenario: Men\'s T-Shirts header has correct text', async ({ homePage }) => {
    
    await test.step('AC: The heading is visible', async () => {

      await expect(homePage.mensTshirtsHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Men\'s T-Shirts', async () => {

      await expect(homePage.mensTshirtsHeader).toHaveText(/Men's T-Shirts/);

    });

  });

  test('Scenario: Ladies T-Shirts header has correct text', async ({ homePage }) => {
    
    await test.step('AC: The heading is visible', async () => {

      await expect(homePage.ladiesTshirtsHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Ladies T-shirts', async () => {

      await expect(homePage.ladiesTshirtsHeader).toHaveText(/Ladies T-Shirts/);

    });

  });

  test('Scenario: Men\'s Outerwear image is visible on the homepage', async ({ homePage }) => {
    
    await test.step('AC: The image is visible', async () => {

      await expect(homePage.mensOuterwearImage).toBeVisible();

    });

  });

  test('Scenario: Ladies Outerwear image is visible on the homepage', async ({ homePage }) => {
    
    await test.step('AC: The image is visible', async () => {

      await expect(homePage.ladiesOuterwearImage).toBeVisible();

    });

  });

  test('Scenario: Men\'s T-Shirts image is visible on the homepage', async ({ homePage }) => {
    
    await test.step('AC: The image is visible', async () => {

      await expect(homePage.mensTshirtsImage).toBeVisible();

    });

  });

  test('Scenario: Ladies T-Shirts image is visible on the homepage', async ({ homePage }) => {
    
    await test.step('AC: The image is visible', async () => {

      await expect(homePage.ladiesTshirtsImage).toBeVisible();

    });

  });

});