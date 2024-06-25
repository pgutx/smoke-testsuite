import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { MensOuterwear } from '../pages/mens-outerwear';
import { LadiesOuterwear } from '../pages/ladies-outerwear';

type pageFixtures = {
    homePage: HomePage;
    mensOuterwear: MensOuterwear;
    ladiesOuterwear: LadiesOuterwear;
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
  }

});
  
export { expect } from '@playwright/test';