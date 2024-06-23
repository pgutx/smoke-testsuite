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

});