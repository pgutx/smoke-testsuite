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

});