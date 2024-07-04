import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { MensOuterwear } from '../pages/mens-outerwear';
import { LadiesOuterwear } from '../pages/ladies-outerwear';
import { MensTshirts } from '../pages/mens-tshirts';
import { LadiesTshirts } from '../pages/ladies-tshirts';
import { ProductPage } from '../pages/product';
import { EmptyCart } from '../pages/empty-cart';
import { PopulatedCart } from '../pages/populated-cart';
import { Checkout } from '../pages/checkout';

type pageFixtures = {
    homePage: HomePage;
    mensOuterwear: MensOuterwear;
    ladiesOuterwear: LadiesOuterwear;
    mensTshirts: MensTshirts;
    ladiesTshirts: LadiesTshirts;
    productPage: ProductPage;
    emptyCart: EmptyCart;
    populatedCart: PopulatedCart;
    checkoutPage: Checkout;
  }

export const test = base.extend<pageFixtures>({
  
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
    await page.close();
  },
  mensOuterwear: async({ page }, use) => {
    await use(new MensOuterwear(page));
    await page.close();
  },
  ladiesOuterwear: async({ page }, use) => {
    await use(new LadiesOuterwear(page));
    await page.close();
  },
  mensTshirts: async({ page }, use) => {
    await use(new MensTshirts(page));
    await page.close();
  },
  ladiesTshirts: async({ page }, use) => {
    await use(new LadiesTshirts(page));
    await page.close();
  },
  productPage: async({ page }, use) => {
    await use(new ProductPage(page));
    await page.close();
  },
  emptyCart: async({ page }, use) => {
    await use(new EmptyCart(page));
    await page.close();
  },
  populatedCart: async({ page, mensOuterwear, productPage }, use) => {

    await mensOuterwear.goToMensOuterwearPage();

    await mensOuterwear.clickFirstProductLink();

    await productPage.clickAddToCartButton();

    await expect.soft(productPage.dialogPopup).toBeVisible();

    await productPage.clickViewCartButton();

    await use(new PopulatedCart(page));

    await page.close();
  },
  checkoutPage: async({ page, mensOuterwear, productPage }, use) => {

    await mensOuterwear.goToMensOuterwearPage();

    await mensOuterwear.clickFirstProductLink();

    await productPage.clickAddToCartButton();

    await expect.soft(productPage.dialogPopup).toBeVisible();

    await productPage.clickCheckoutButton();

    await use(new Checkout(page));

    await page.close();
  },

});
  
export { expect } from '@playwright/test';