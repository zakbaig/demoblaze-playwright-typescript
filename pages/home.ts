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
		// Wait for category link to be visible before clicking
		const phonesCategory = this.page.locator('a[onclick="byCat(\'phone\')"]');
		await expect(phonesCategory).toBeVisible({ timeout: 10000 });
		await phonesCategory.click();

		// Wait for product cards to appear
		const firstProduct = this.page.locator('.card-title a').first();
		await expect(firstProduct).toBeVisible({ timeout: 10000 });
	}

	async openFirstProduct() {
		const firstProduct = this.page.locator('.card-title a').first();
		await expect(firstProduct).toBeVisible({ timeout: 10000 });
		const name = await firstProduct.textContent();
		await firstProduct.click();
		return name;
	}
}