import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ mensOuterwear }) => {
    await mensOuterwear.goToMensOuterwearPage();
});

test.describe('Smoke Test - Men\'s Outerwear page', () => {

  test('Scenario: User sees the correct URL', async({ mensOuterwear }) => {
  
    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/list/mens_outerwear is displayed', async () => {
  
      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
  
    });
  
  });

  test('Scenario: User sees the correct Title', async({ mensOuterwear }) => {

    await test.step('AC: Correct <Title>: Men\'s Outerwear - SHOP is displayed', async () => {
    
      await expect(mensOuterwear.page).toHaveTitle(/Men's Outerwear - SHOP/);
    
    });
    
  });

  test('Scenario: SHOP button is interactable on the Men\'s Outerwear page', async ({ mensOuterwear }) => {

    await test.step('AC: The button is visible', async () => {
  
      await expect(mensOuterwear.shopButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is enabled', async () => {
  
      await expect(mensOuterwear.shopButton).toBeEnabled();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() =>{
  
      await mensOuterwear.clickShopButton();
  
      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/');
        
    });
  
  });
  
  test('Scenario: Cart button is interactable on the Men\'s Outerwear page', async ({ mensOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
  
      await expect(mensOuterwear.cartButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is enabled', async () => {
  
      await expect(mensOuterwear.cartButton).toBeEnabled();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await mensOuterwear.clickCartButton();
  
      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/cart');
        
    });
      
  });

  test('Scenario: Men\'s Outerwear button is interactable on the Men\'s Outerwear page', async ({ mensOuterwear }) => {

    await test.step('AC: The button is visible', async () => {
        
      await expect(mensOuterwear.mensOuterwearButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(mensOuterwear.mensOuterwearButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await mensOuterwear.clickMensOuterwearButton();
  
      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');
        
    });
  
  });
  
  test('Scenario: Ladies Outerwear button is interactable on the Men\'s Outerwear page', async ({ mensOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
        
      await expect(mensOuterwear.ladiesOuterwearButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(mensOuterwear.ladiesOuterwearButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await mensOuterwear.clickLadiesOuterwearButton();
  
      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');
        
    });
  
  });
  
  test('Scenario: Men\'s T-Shirts button is interactable on the Men\'s Outerwear page', async ({ mensOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
        
      await expect(mensOuterwear.mensTshirtButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(mensOuterwear.mensTshirtButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await mensOuterwear.clickMensTshirtsButton();
  
      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');
        
    });
  
  });
  
  test('Scenario: Ladies T-Shirts button is interactable on the Men\'s Outerwear page', async ({ mensOuterwear }) => {
  
    await test.step('AC: The button is visible', async () => {
        
      await expect(mensOuterwear.ladiesTshirtButton).toBeVisible();
  
    });
  
    await test.step('AC: The button is editable', async () => {
        
      await expect(mensOuterwear.ladiesTshirtButton).toBeEditable();
  
    });
  
    await test.step('AC: The button leads to correct URL', async() => {
  
      await mensOuterwear.clickLadiesTshirtsButton();
  
      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');
        
    });
  
  });
    
  test('Scenario: Main image is visible on the Men\'s Outerwear page', async ({ mensOuterwear }) => {
  
    await test.step('AC: The image is visible', async () => {
        
      await expect(mensOuterwear.mainImage).toBeVisible();
  
    });
  
    await test.step('AC: The image is editable', async () => {
        
      await expect(mensOuterwear.mainImage).toBeEditable();
  
    });
  
  });

  test('Scenario: Men\'s Outerwear header has correct text', async ({ mensOuterwear }) => {
    
    await test.step('AC: The heading is visible', async () => {

      await expect(mensOuterwear.mensOuterwearHeader).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Men\'s Outerwear', async () => {

      await expect(mensOuterwear.mensOuterwearHeader).toHaveText(/Men's Outerwear/);

    });

  });

  test('Scenario: Items quantity has correct text', async ({ mensOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensOuterwear.itemsQuantityText).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - (16 items)', async () => {

      await expect(mensOuterwear.itemsQuantityText).toHaveText(/(16 items)/);

    });

  });

  test('Scenario: First product\'s link is interactable', async ({ mensOuterwear }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(mensOuterwear.firstItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(mensOuterwear.firstItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await mensOuterwear.clickFirstProductLink();

      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip');

    });

  });

  test('Scenario: First product has correct name', async ({ mensOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensOuterwear.firstItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Men\'s Tech Shell Full-Zip', async () => {

      await expect(mensOuterwear.firstItemName).toHaveText(/Men\'s Tech Shell Full-Zip/);

    });

  });

  test('Scenario: First product has correct price', async ({ mensOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensOuterwear.firstItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $50.20', async () => {

      await expect(mensOuterwear.firstItemPrice).toHaveText(/\$50.20/);

    });

  });

  test('Scenario: Middle product\'s link is interactable', async ({ mensOuterwear }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(mensOuterwear.middleItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(mensOuterwear.middleItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await mensOuterwear.clickMiddleProductLink();

      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/detail/mens_outerwear/Recycled+Plastic+Bottle+Hoodie+-+Green');

    });

  });

  test('Scenario: Middle product has correct name', async ({ mensOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensOuterwear.middleItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - Recycled Plastic Bottle Hoodie - Green', async () => {

      await expect(mensOuterwear.middleItemName).toHaveText(/Recycled Plastic Bottle Hoodie - Green/);

    });

  });

  test('Scenario: Middle product has correct price', async ({ mensOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensOuterwear.middleItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $60.95', async () => {

      await expect(mensOuterwear.middleItemPrice).toHaveText(/\$60.95/);

    });

  });

  test('Scenario: Last product\'s link is interactable', async ({ mensOuterwear }) => {

    await test.step('AC: The product link is visible', async () =>{

      await expect(mensOuterwear.lastItemLink).toBeVisible();

    });

    await test.step('AC: The product link is editable', async () =>{

      await expect(mensOuterwear.lastItemLink).toBeEditable();

    });

    await test.step('AC: The product link can be clicked', async () =>{

      await mensOuterwear.clickLastProductLink();

      await expect(mensOuterwear.page).toHaveURL('https://shop.polymer-project.org/detail/mens_outerwear/YouTube+Unisex+Flex+Fleece+Zip+Hoodie');

    });

  });

  test('Scenario: Last product has correct name', async ({ mensOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensOuterwear.lastItemName).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - YouTube Unisex Flex Fleece Zip Hoodie', async () => {

      await expect(mensOuterwear.lastItemName).toHaveText(/YouTube Unisex Flex Fleece Zip Hoodie/);

    });

  });

  test('Scenario: Last product has correct price', async ({ mensOuterwear }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(mensOuterwear.lastItemPrice).toBeVisible();

    });

    await test.step('AC: Correct text is displayed - $45.25', async () => {

      await expect(mensOuterwear.lastItemPrice).toHaveText(/\$45.25/);

    });

  });

});