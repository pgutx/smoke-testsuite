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

});