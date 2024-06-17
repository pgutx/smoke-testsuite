import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homepage';

type pageFixtures = {
    homePage: HomePage;
  }

export const test = base.extend<pageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  }
});
  
export { expect } from '@playwright/test';