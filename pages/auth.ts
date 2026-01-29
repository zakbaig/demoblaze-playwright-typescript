import { Page, expect } from '@playwright/test';

export class AuthPage {
  constructor(private page: Page) { }

  async signUp(username: string, password: string) {
    // Wait for modal to be fully visible
    await this.page.waitForSelector('#signInModal', { state: 'visible' });

    // Fill in credentials
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);

    // Set up dialog handler **before clicking**
    const dialogPromise = this.page.waitForEvent('dialog');

    // Click sign up
    await this.page.click('button[onclick="register()"]');

    // Wait for dialog and accept it
    const dialog = await dialogPromise;
    await expect(dialog.message()).toContain('Sign up successful');
    await dialog.accept();

    // Wait a short time to allow the signup to process
    // await this.page.waitForTimeout(500);
  }

  async login(username: string, password: string) {
    await this.page.fill('#loginusername', username);
    await this.page.fill('#loginpassword', password);
    await this.page.click('button[onclick="logIn()"]');
  }

  async expectLoggedIn(username: string) {
    const userLocator = this.page.locator('#nameofuser');
    await expect(userLocator).toHaveText(`Welcome ${username}`);
  }

  async logout() {
    await this.page.click('#logout2');
    await expect(this.page.locator('#login2')).toBeVisible();
  }
}