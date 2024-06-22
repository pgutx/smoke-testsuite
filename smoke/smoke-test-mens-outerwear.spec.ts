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
});