import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ productPage }) => {
    await productPage.goToProductPage();
});

test.describe('Smoke Test - Product page', () => {

  test('Scenario: User sees the correct URL', async({ productPage }) => {

    await test.step('AC: Correct <URL>: https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip is displayed', async () => {

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip');

    });

  });

  test('Scenario: User sees the correct Title', async({ productPage }) => {

    await test.step('AC: Correct <Title>: Men\'s Tech Schell Full-Zip - SHOP is displayed', async () => {

      await expect(productPage.page).toHaveTitle(/Men's Tech Shell Full-Zip - SHOP/);

    });

  });

  test('Scenario: SHOP button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.shopButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(productPage.shopButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() =>{

      await productPage.clickShopButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/');

    });

  });

  test('Scenario: Cart button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.cartButton).toBeVisible();

    });

    await test.step('AC: The button is enabled', async () => {

      await expect(productPage.cartButton).toBeEnabled();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickCartButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Men\'s Outerwear button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.mensOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.mensOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickMensOuterwearButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');

    });

  });

  test('Scenario: Ladies Outerwear button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.ladiesOuterwearButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.ladiesOuterwearButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickLadiesOuterwearButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear');

    });

  });

  test('Scenario: Men\'s T-Shirts button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.mensTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.mensTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickMensTshirtsButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts');
      
    });

  });

  test('Scenario: Ladies T-Shirts button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.ladiesTshirtButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.ladiesTshirtButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickLadiesTshirtsButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts');

    });

  });

  test('Scenario: Back button button is interactable on the Product page', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.backButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.backButton).toBeEditable();

    });

    await test.step('AC: The button leads to correct URL', async() => {

      await productPage.clickBackButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear');

    });

  });

  test('Scenario: Product image is visible', async ({ productPage }) => {

    await test.step('AC: The image is visible', async () => {

      await expect(productPage.productImg).toBeVisible();

    });

    await test.step('AC: The image is editable', async () => {

      await expect(productPage.productImg).toBeEditable();

    });

  });

  test('Scenario: Product has correct name', async ({ productPage }) => {

    await test.step('AC: The name is visible', async () => {

      await expect(productPage.productName).toBeVisible();

    });

    await test.step('AC: The name is editable', async () => {

      await expect(productPage.productName).toBeEditable();

    });

    await test.step('AC: Correct name is displayed - Men\'s Tech Shell Full-Zip', async () =>{

      await expect(productPage.productName).toHaveText(/Men's Tech Shell Full-Zip/);

    });

  });

  test('Scenario: Product has correct price', async ({ productPage }) => {

    await test.step('AC: The price is visible', async () => {

      await expect(productPage.productPrice).toBeVisible();

    });

    await test.step('AC: The price is editable', async () => {

      await expect(productPage.productPrice).toBeEditable();

    });

    await test.step('AC: Correct price is displayed - $50.20', async () => {

      await expect(productPage.productPrice).toHaveText(/\$50.20/);

    });

  });

  test('Scenario: Size option is interactable', async ({ productPage }) => {
        
    await test.step('AC: Size option is visible', async () => {

      await expect(productPage.sizeSelect).toBeVisible();

    });

    await test.step('AC: Size option is editable', async () => {

      await expect(productPage.sizeSelect).toBeEditable();

    });

    await test.step('AC: Correct sizes are available - XS', async () => {

      await productPage.selectSizeOptionXS();

      await expect(productPage.sizeSelect).toHaveValue(/XS/);

    });

    await test.step('AC: Correct sizes are available - S', async () => {

      await productPage.selectSizeOptionS();

      await expect(productPage.sizeSelect).toHaveValue(/S/);

    });

    await test.step('AC: Correct sizes are available - M', async () => {

      await productPage.selectSizeOptionM();

      await expect(productPage.sizeSelect).toHaveValue(/M/);

    });

    await test.step('AC: Correct sizes are available - L', async () => {

      await productPage.selectSizeOptionL();

      await expect(productPage.sizeSelect).toHaveValue(/L/);

    });

    await test.step('AC: Correct sizes are available - XL', async () => {

      await productPage.selectSizeOptionXL();

      await expect(productPage.sizeSelect).toHaveValue(/XL/);

    });

  });

  test('Scenario: Quantity option is interactable', async ({ productPage }) => {
        
    await test.step('AC: Size option is visible', async () => {

      await expect(productPage.quantitySelect).toBeVisible();

    });

    await test.step('AC: Size option is editable', async () => {

      await expect(productPage.quantitySelect).toBeEditable();

    });

    await test.step('AC: Correct quantities are available - 1', async () => {

      await productPage.selectQuantityOption1();

      await expect(productPage.quantitySelect).toHaveValue(/1/);

    });

    await test.step('AC: Correct quantities are available - 2', async () => {

      await productPage.selectQuantityOption2();

      await expect(productPage.quantitySelect).toHaveValue(/2/);

    });

    await test.step('AC: Correct quantities are available - 3', async () => {

      await productPage.selectQuantityOption3();

      await expect(productPage.quantitySelect).toHaveValue(/3/);

    });

    await test.step('AC: Correct quantities are available - 4', async () => {

      await productPage.selectQuantityOption4();

      await expect(productPage.quantitySelect).toHaveValue(/4/);

    });

    await test.step('AC: Correct quantities are available - 5', async () => {

      await productPage.selectQuantityOption5();

      await expect(productPage.quantitySelect).toHaveValue(/5/);

    });

  });

  test('Scenario: Product description is visible', async({ productPage }) => {

    await test.step('AC: Description box is displayed', async () => {

      await expect(productPage.productDescription).toBeVisible();

    });

  });

  test('Scenario: Add to cart button is interactable', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await expect(productPage.addToCartButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async() => {

      await expect(productPage.addToCartButton).toBeEditable();

    });

    await test.step('AC: The button can be clicked', async () => {
      
      await productPage.clickAddToCartButton();

      await expect(productPage.dialogPopup).toBeVisible();

    });

    await test.step('AC: The item was added to the cart', async() => {

      await expect(productPage.populatedCartButton).toBeVisible();

    });

  });

  test('Scenario: View cart button is interactable on the popup', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await productPage.clickAddToCartButton();

      await expect(productPage.viewCartButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.viewCartButton).toBeEditable();

    });

    await test.step('AC: The user is redirected to the cart page', async () => {

      await productPage.clickViewCartButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/cart');

    });

  });

  test('Scenario: Checkout button is interactable on the popup', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await productPage.clickAddToCartButton();
      
      await expect(productPage.checkoutButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.checkoutButton).toBeEditable();

    });

    await test.step('AC: The user is redirected to the checkout page', async () => {

      await productPage.clickCheckoutButton();

      await expect(productPage.page).toHaveURL('https://shop.polymer-project.org/checkout');

    });

  });

  test('Scenario: Close button is interactable on the popup', async ({ productPage }) => {

    await test.step('AC: The button is visible', async () => {

      await productPage.clickAddToCartButton();
      
      await expect(productPage.closeDialogButton).toBeVisible();

    });

    await test.step('AC: The button is editable', async () => {

      await expect(productPage.closeDialogButton).toBeEditable();

    });

    await test.step('AC: The popup closes after clicking the button', async () => {

      await productPage.clickCloseDialogButton();

      await expect(productPage.dialogPopup).not.toBeVisible();

    });

  });

});