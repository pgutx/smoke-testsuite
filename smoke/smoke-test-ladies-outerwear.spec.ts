import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ ladiesOuterwear }) => {
  await ladiesOuterwear.goToLadiesOuterwearPage();
});

test.describe('Smoke test Ladies Outerwear page', () => {

  test('Scenario: User sees the correct URL', async({ ladiesOuterwear }) => {
  
    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/list/ladies_outerwear is displayed', async () => {
      
      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');
      
    });
      
  });

  test('Scenario: User sees the correct Title', async({ ladiesOuterwear }) => {

    await test.step('AC: Correct <Title>: Ladies Outerwear - SHOP is displayed', async () => {
    
      await expect(ladiesOuterwear.page).toHaveTitle(/Ladies Outerwear - SHOP/);
    
    });
    
  });

  test('Scenario: SHOP button is interactable on the Ladies Outerwear page', async ({ ladiesOuterwear }) => {

    await test.step('AC: The button is visible', async () => {
  
      await expect(ladiesOuterwear.shopButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is enabled', async () => {
  
      await expect(ladiesOuterwear.shopButton).toBeEnabled();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() =>{
  
      await ladiesOuterwear.clickShopButton();
  
      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/');
        
    });
  
  });
  
  test('Scenario: Cart button is interactable on the Ladies Outerwear page', async ({ ladiesOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
  
      await expect(ladiesOuterwear.cartButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is enabled', async () => {
  
      await expect(ladiesOuterwear.cartButton).toBeEnabled();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await ladiesOuterwear.clickCartButton();
  
      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/cart');
        
    });
      
  });

  test('Scenario: Men\'s Outerwear button is interactable on the Ladies Outerwear page', async ({ ladiesOuterwear }) => {

    await test.step('AC: The button is visible', async () => {
        
      await expect(ladiesOuterwear.mensOuterwearButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(ladiesOuterwear.mensOuterwearButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await ladiesOuterwear.clickMensOuterwearButton();
  
      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
        
    });
  
  });
  
  test('Scenario: Ladies Outerwear button is interactable on the Ladies Outerwear page', async ({ ladiesOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
        
      await expect(ladiesOuterwear.ladiesOuterwearButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(ladiesOuterwear.ladiesOuterwearButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await ladiesOuterwear.clickLadiesOuterwearButton();
  
      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');
        
    });
  
  });
  
  test('Scenario: Men\'s T-Shirts button is interactable on the Ladies Outerwear page', async ({ ladiesOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
        
      await expect(ladiesOuterwear.mensTshirtButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(ladiesOuterwear.mensTshirtButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await ladiesOuterwear.clickMensTshirtsButton();
  
      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');
        
    });
  
  });
  
  test('Scenario: Ladies T-Shirts button is interactable on the Ladies Outerwear page', async ({ ladiesOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
        
      await expect(ladiesOuterwear.ladiesTshirtButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(ladiesOuterwear.ladiesTshirtButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await ladiesOuterwear.clickLadiesTshirtsButton();
  
      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');
        
    });
  
  });

  test('Scenario: Main image is visible on the Ladies Outerwear page', async ({ ladiesOuterwear }) => {
  
    await test.step('AC: The image is visible', async () => {
        
      await expect(ladiesOuterwear.mainImage).toBeVisible();
  
    });
  
    await test.step('AC: The image is editable', async () => {
        
      await expect(ladiesOuterwear.mainImage).toBeEditable();
  
    });
  
  });

  test('Scenario: Ladies Outerwear header has correct text', async ({ ladiesOuterwear }) => {
    
    await test.step('AC: The heading is visible', async () => {

      await expect(ladiesOuterwear.ladiesOuterwearHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Ladies Outerwear', async () => {

      await expect(ladiesOuterwear.ladiesOuterwearHeader).toHaveText(/Ladies Outerwear/);

    });

  });

  test('Scenario: Items quantity has correct text', async ({ ladiesOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesOuterwear.itemsQuantityText).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - (6 items)', async () => {

      await expect(ladiesOuterwear.itemsQuantityText).toHaveText(/(6 items)/);

    });

  });

  test('Scenario: First product\'s link is interactable', async ({ ladiesOuterwear }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(ladiesOuterwear.firstItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(ladiesOuterwear.firstItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await ladiesOuterwear.clickFirstProductLink();

      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/detail/ladies_outerwear/Ladies+Modern+Stretch+Full+Zip');

    });

  });

  test('Scenario: First product has correct name', async ({ ladiesOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesOuterwear.firstItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Ladies Modern Stretch Full Zip', async () => {

      await expect(ladiesOuterwear.firstItemName).toHaveText(/Ladies Modern Stretch Full Zip/);

    });

  });

  test('Scenario: First product has correct price', async ({ ladiesOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesOuterwear.firstItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $41.60', async () => {

      await expect(ladiesOuterwear.firstItemPrice).toHaveText(/\$41.60/);

    });

  });

  test('Scenario: Last product\'s link is interactable', async ({ ladiesOuterwear }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(ladiesOuterwear.lastItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(ladiesOuterwear.lastItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await ladiesOuterwear.clickLastProductLink();

      await expect(ladiesOuterwear.page).toHaveURL('https://shop.polymer-project.org/detail/ladies_outerwear/Ladies+Yerba+Knit+Quarter+Zip');

    });

  });

  test('Scenario: Last product has correct name', async ({ ladiesOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesOuterwear.lastItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Ladies Yerba Knit Quarter Zip', async () => {

      await expect(ladiesOuterwear.lastItemName).toHaveText(/Ladies Yerba Knit Quarter Zip/);

    });

  });

  test('Scenario: Last product has correct price', async ({ ladiesOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(ladiesOuterwear.lastItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $64.20', async () => {

      await expect(ladiesOuterwear.lastItemPrice).toHaveText(/\$64.20/);

    });

  });

});