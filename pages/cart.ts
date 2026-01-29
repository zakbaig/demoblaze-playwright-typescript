import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) { }

  async open() {
    await this.page.goto('/cart.html');
    await this.page.waitForSelector('button[data-target="#orderModal"]');
  }

  async placeOrder() {
    await this.page.click('button[data-target="#orderModal"]');

    await this.page.fill('#name', 'Test User');
    await this.page.fill('#country', 'Test Country');
    await this.page.fill('#city', 'Test City');
    await this.page.fill('#card', '4111111111111111');
    await this.page.fill('#month', '12');
    await this.page.fill('#year', '2030');

    await this.page.click('button[onclick="purchaseOrder()"]');
  }

  async expectPurchaseSuccess() {
    await expect(this.page.locator('.sweet-alert')).toContainText('Thank you for your purchase');
  }
}