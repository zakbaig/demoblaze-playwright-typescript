import { Page, expect } from '@playwright/test';


export class ProductPage {
  constructor(private page: Page) { }


  async addToCart() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });


    await this.page.click('a[onclick^="addToCart"]');
  }
}