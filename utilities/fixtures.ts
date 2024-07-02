import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { MensOuterwear } from '../pages/mens-outerwear';
import { LadiesOuterwear } from '../pages/ladies-outerwear';
import { MensTshirts } from '../pages/mens-tshirts';
import { LadiesTshirts } from '../pages/ladies-tshirts';
import { ProductPage } from '../pages/product';
import { EmptyCart } from '../pages/empty-cart';
import { PopulatedCart } from '../pages/populated-cart';

type pageFixtures = {
    homePage: HomePage;
    mensOuterwear: MensOuterwear;
    ladiesOuterwear: LadiesOuterwear;
    mensTshirts: MensTshirts;
    ladiesTshirts: LadiesTshirts;
    productPage: ProductPage;
    emptyCart: EmptyCart;
    populatedCart: PopulatedCart;
  }

export const test = base.extend<pageFixtures>({
  
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  mensOuterwear: async({ page }, use) => {
    await use(new MensOuterwear(page));
  },
  ladiesOuterwear: async({ page }, use) => {
    await use(new LadiesOuterwear(page));
  },
  mensTshirts: async({ page }, use) => {
    await use(new MensTshirts(page));
  },
  ladiesTshirts: async({ page }, use) => {
    await use(new LadiesTshirts(page));
  },
  productPage: async({ page }, use) => {
    await use(new ProductPage(page));
  },
  emptyCart: async({ page }, use) => {
    await use(new EmptyCart(page));
  },
  populatedCart: async({ page, productPage, mensOuterwear }, use) => {

    await mensOuterwear.goToMensOuterwearPage();

    await mensOuterwear.clickFirstProductLink();

    await productPage.clickAddToCartButton();

    await expect.soft(productPage.dialogPopup).toBeVisible();

    await productPage.clickViewCartButton();

    await use(new PopulatedCart(page));
  },

});
  
export { expect } from '@playwright/test';