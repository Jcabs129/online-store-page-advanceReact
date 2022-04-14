import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:7777/');
  await page.click('text=Sign in');
  await page.fill('#__next input[type=email]', 'test@example.com');
  await page.fill('#__next input[type=password]', 'testing123');
  await page.click('#__next button');
  await expect(page.locator('text=Sign Out').first()).toBeVisible();
});

test('', async ({ page }) => {
  await page.click('#__next button:nth-child(6)');
  // await page.locator('text=Check Out Now!!').click();
  const cardNum = await page
    .frameLocator('iframe[name="__privateStripeFrame5985"]')
    .locator('[placeholder="Card\\ number"]')
    .click();
  await cardNum;
  // .locator('[placeholder="Card\\ number"]')
  // .click()
});
