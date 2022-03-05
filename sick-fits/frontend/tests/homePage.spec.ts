import { test, expect } from '@playwright/test';

test('Landing page test', async ({ page }) => {
  await page.goto('http://localhost:7777/');
  const title = page.locator('#__next > div > header > div.bar > h1');
  await expect(title).toHaveText('Sick fits');
  // Expect some text to be visible on the page.
  await expect(page.locator('text=Products').first()).toBeVisible();

  // Expect an attribute "to be strictly equal" to the value
  await expect(page.locator('text=Sign In')).toHaveAttribute('href', '/signin');
});

test('Test signin page', async ({ page }) => {
  await page.goto('http://localhost:7777/');
  await page.click('text=Sign in');
  await page.fill('#__next input[type=email]', 'test@example.com');
  await page.fill('#__next input[type=password]', 'testing123');
  await page.click('#__next button');
  await expect(page.locator('text=Sign Out').first()).toBeVisible();
});
