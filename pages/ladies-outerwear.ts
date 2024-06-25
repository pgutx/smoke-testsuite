import { type Locator, type Page } from '@playwright/test';

export class LadiesOuterwear {

  readonly page: Page;

  constructor (page: Page){
    this.page = page;
  }

  async goToLadiesOuterwearPage() {
    await this.page.goto('https://shop.polymer-project.org/list/ladies_outerwear');
}

};
