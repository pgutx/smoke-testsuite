import { type Locator, type Page } from '@playwright/test';

export class MensOuterwear {

  readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goToMensOuterwearPage() {
        await this.page.goto('https://shop.polymer-project.org/list/mens_outerwear');
      }
};