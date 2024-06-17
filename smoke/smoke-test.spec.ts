import { test, expect } from '../utilities/fixtures';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomepage();
});

test.describe('Smoke Test', () => {
  test('First test', async ({ homePage }) => {
    await test.step('Acceptance criteria: Visibility', async () => {
      await expect(homePage.shopLink).toBeVisible();
    });
  });
});