import { Page, expect } from '@playwright/test';


export class AuthPage {
  constructor(private page: Page) { }


  async signUp(username: string, password: string) {
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);


    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });


    await this.page.click('button[onclick="register()"]');
  }


  async login(username: string, password: string) {
    await this.page.fill('#loginusername', username);
    await this.page.fill('#loginpassword', password);
    await this.page.click('button[onclick="logIn()"]');
  }


  async expectLoggedIn(username: string) {
    await expect(this.page.locator('#nameofuser')).toContainText(username);
  }


  async logout() {
    await this.page.click('#logout2');
  }
}