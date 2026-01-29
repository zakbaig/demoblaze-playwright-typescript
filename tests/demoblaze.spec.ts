import { test } from '@playwright/test';
import { HomePage } from '../pages/home';
import { AuthPage } from '../pages/auth';
import { ProductPage } from '../pages/product';
import { CartPage } from '../pages/cart';


const USER = {
  username: `user${Date.now()}`,
  password: 'Password123!'
};

test.describe('DemoBlaze – Core Functional Tests', () => {

  test('TC01: User can sign up with valid credentials', async ({ page }) => {
    const home = new HomePage(page);
    const auth = new AuthPage(page);

    await home.open();
    await home.openSignUp();
    await auth.signUp(USER.username, USER.password);
  });

  test('TC02: User can log in and log out successfully', async ({ page }) => {
    const home = new HomePage(page);
    const auth = new AuthPage(page);

    await home.open();
    await home.openLogin();
    await auth.login(USER.username, USER.password);
    await auth.expectLoggedIn(USER.username);
    await auth.logout();
  });

  test('TC03: User can browse products by category and view product details', async ({ page }) => {
    const home = new HomePage(page);

    await home.open();
    await home.selectPhonesCategory();
    const productName = await home.openFirstProduct();

    await page.waitForSelector('.name');
  });

  test('TC04: User can add a product to the cart', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);

    await home.open();
    await home.openFirstProduct();
    await product.addToCart();
  });

  test('TC05: User can complete a purchase successfully', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.open();
    await cart.placeOrder();
    await cart.expectPurchaseSuccess();
  });
});