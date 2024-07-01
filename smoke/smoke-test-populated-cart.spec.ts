import { test, expect } from '../utilities/fixtures';

test.describe('Smoke Test - Populated cart', () => {

  test('Scenario: User sees the correct URL', async({ populatedCart }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/cart is displayed', async () => {

      await expect(populatedCart.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: User sees the correct Title', async({ populatedCart }) => {

    await test.step('AC: Correct <Title>: Your cart - SHOP is displayed', async () => {

      await expect(populatedCart.page).toHaveTitle(/Your cart - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the empty cart page', async ({ populatedCart }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(populatedCart.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(populatedCart.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await populatedCart.clickShopButton();

      await expect(populatedCart.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: Cart button is interactable on the empty cart page', async ({ populatedCart }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(populatedCart.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(populatedCart.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await populatedCart.clickCartButton();

      await expect(populatedCart.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Populated cart paragraph is visible', async ({ populatedCart }) => {

    await test.step('AC: The paragraph is visible', async () => {

      await expect(populatedCart.populatedCartElement).toBeVisible();

    });

  });

  test('Scenario: Cart heading is visible', async ({ populatedCart }) => {

    await test.step('AC: The heading is visible', async () => {

      await expect(populatedCart.cartHeading).toBeVisible();
      
    });

  });

  test('Scenario: Number of added items text is visible', async ({ populatedCart }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(populatedCart.itemNumber).toBeVisible();
      
    });

  });

  test('Scenario: Item image is interactable', async ({ populatedCart }) => {

    await test.step('AC: The image is visible', async () => {

      await expect(populatedCart.itemImage).toBeVisible();
      
    });

    await test.step('AC: The image is editable', async () => {

      await expect(populatedCart.itemImage).toBeEditable();
        
    });

    await test.step('AC: The image can be clicked', async () => {

      await populatedCart.clickItemImage();

      await expect(populatedCart.page).toHaveURL('https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip');
        
    });

  });

  test('Scenario: Item name is interactable', async ({ populatedCart }) => {

    await test.step('AC: The name is visible', async () => {

      await expect(populatedCart.itemName).toBeVisible();
      
    });

    await test.step('AC: The name is editable', async () => {

      await expect(populatedCart.itemName).toBeEditable();
        
    });

    await test.step('AC: The name can be clicked', async () => {

      await populatedCart.clickItemName();

      await expect(populatedCart.page).toHaveURL('https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip');
        
    });

  });

  test('Scenario: Quantity option is interactable', async ({ populatedCart }) => {
        
    await test.step('AC: Size option is visible', async () => {

      await expect(populatedCart.quantitySelect).toBeVisible();

    });

    await test.step('AC: Size option is editable', async () => {

      await expect(populatedCart.quantitySelect).toBeEditable();

    });

    await test.step('AC: Correct quantities are available - 1', async () => {

      await populatedCart.selectQuantityOption1();

      await expect(populatedCart.quantitySelect).toHaveValue(/1/);

    });

    await test.step('AC: Correct quantities are available - 2', async () => {

      await populatedCart.selectQuantityOption2();

      await expect(populatedCart.quantitySelect).toHaveValue(/2/);

    });

    await test.step('AC: Correct quantities are available - 3', async () => {

      await populatedCart.selectQuantityOption3();

      await expect(populatedCart.quantitySelect).toHaveValue(/3/);

    });

    await test.step('AC: Correct quantities are available - 4', async () => {

      await populatedCart.selectQuantityOption4();

      await expect(populatedCart.quantitySelect).toHaveValue(/4/);

    });

    await test.step('AC: Correct quantities are available - 5', async () => {

      await populatedCart.selectQuantityOption5();

      await expect(populatedCart.quantitySelect).toHaveValue(/5/);

    });

    await test.step('AC: Correct quantities are available - 6', async () => {

      await populatedCart.selectQuantityOption6();
  
      await expect(populatedCart.quantitySelect).toHaveValue(/6/);
  
    });

    await test.step('AC: Correct quantities are available - 7', async () => {

      await populatedCart.selectQuantityOption7();

      await expect(populatedCart.quantitySelect).toHaveValue(/7/);

    });

    await test.step('AC: Correct quantities are available - 8', async () => {

      await populatedCart.selectQuantityOption8();
  
      await expect(populatedCart.quantitySelect).toHaveValue(/8/);
  
    });

    await test.step('AC: Correct quantities are available - 9', async () => {

      await populatedCart.selectQuantityOption9();
  
      await expect(populatedCart.quantitySelect).toHaveValue(/9/);
  
    });

    await test.step('AC: Correct quantities are available - 10', async () => {

      await populatedCart.selectQuantityOption10();
  
      await expect(populatedCart.quantitySelect).toHaveValue(/10/);
  
    });

    await test.step('AC: Correct quantities are available - 11', async () => {

      await populatedCart.selectQuantityOption11();
  
      await expect(populatedCart.quantitySelect).toHaveValue(/11/);
  
    });

    await test.step('AC: Correct quantities are available - 12', async () => {

      await populatedCart.selectQuantityOption12();
  
      await expect(populatedCart.quantitySelect).toHaveValue(/12/);
  
    });

  });

  test('Scenario: Size field is visible', async ({ populatedCart }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(populatedCart.sizeField).toBeVisible();
      
    });

  });

  test('Scenario: Price field is visible', async ({ populatedCart }) => {

    await test.step('AC: The text is visible', async () => {

      await expect(populatedCart.priceField).toBeVisible();
      
    });

  });

  test('Scenario: Delete the item button is interactable', async ({ populatedCart }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(populatedCart.deleteItemButton).toBeVisible();
      
    });

    await test.step('AC: The button is editable', async () => {

      await expect(populatedCart.deleteItemButton).toBeEditable();
        
    });

    await test.step('AC: The item gets deleted', async () => {

      await populatedCart.clickDeleteItemButton();

      await expect(populatedCart.emptyCartParagraph).toBeVisible();
        
    });

  });

  test('Scenario: Total price field is visible', async ({ populatedCart }) => {
    
    await test.step('AC: The field is visible', async () =>{

      await expect(populatedCart.totalPriceField).toBeVisible();

    });

    await test.step('AC: The field is editable', async () =>{

      await expect(populatedCart.totalPriceField).toBeEditable();
  
    });

    await test.step('AC: The field is updated accordingly - 4 items', async () =>{

      await populatedCart.selectQuantityOption4();

      await expect(populatedCart.totalPriceField).toHaveText(/\$200.80/);
  
    });

    await test.step('AC: The field is updated accordingly - 8 items', async () =>{

      await populatedCart.selectQuantityOption8();

      await expect(populatedCart.totalPriceField).toHaveText(/\$401.60/);
    
    });

  });

  test('Scenario: Checkout button is interactable', async ({ populatedCart }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(populatedCart.checkoutButton).toBeVisible();
      
    });

    await test.step('AC: The button is editable', async () => {

      await expect(populatedCart.checkoutButton).toBeEditable();
        
    });

    await test.step('AC: The button leads to checkout page', async () => {

      await populatedCart.clickCheckoutButton();

      await expect(populatedCart.page).toHaveURL('https://shop.polymer-project.org/checkout');
        
    });

  });

});