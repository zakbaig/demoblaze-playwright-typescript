import { Page, expect } from '@playwright/test';

export class HomePage {
	constructor(private page: Page) { }

	async open() {
		await this.page.goto('/');
	}

	async openSignUp() {
		await this.page.click('#signin2');
		await this.page.waitForSelector('#signInModal', { state: 'visible' });
	}

	async openLogin() {
		await this.page.click('#login2');
		await this.page.waitForSelector('#logInModal', { state: 'visible' });
	}

	async selectPhonesCategory() {
		await this.page.click('a[onclick="byCat(1)"]');
		await this.page.waitForSelector('.card-title a');
	}

	async openFirstProduct() {
		const product = this.page.locator('.card-title a').first();
		await expect(product).toBeVisible();
		const name = await product.textContent();
		await product.click();
		return name;
	}
}