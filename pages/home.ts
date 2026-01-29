import { Page, expect } from '@playwright/test';


export class HomePage {
	constructor(private page: Page) { }

	async open() {
		await this.page.goto('/');
	}

	async openSignUp() {
		await this.page.click('#signin2');
	}

	async openLogin() {
		await this.page.click('#login2');
	}

	async selectPhonesCategory() {
		await this.page.click('a[onclick="byCat(phone)"]');
	}

	async openFirstProduct() {
		const product = this.page.locator('.card-title a').first();
		const name = await product.textContent();
		await product.click();
		return name;
	}
}