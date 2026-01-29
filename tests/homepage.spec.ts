import { test, expect } from '@playwright/test';

test('Homepage loads and displays products', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  const products = page.locator('.card');
  await expect(products).toHaveCountGreaterThan(0);
});
