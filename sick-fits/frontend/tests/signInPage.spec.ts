import { test, expect } from '@playwright/test';

test('Test signin page', async ({ page }) => {
  await page.goto('http://localhost:7777/');
  await page.click('text=Sign in');
  await page.fill('#__next input[type=email]', 'test@example.com');
  await page.fill('#__next input[type=password]', 'testing123');
  await page.click('#__next button');
  await expect(page.locator('text=Sign Out').first()).toBeVisible();
});
