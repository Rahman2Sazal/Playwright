import { test, expect } from '@playwright/test';

test('Locators in Playwright', async ({ page }) => {
  
    // go to url
    await page.goto('https://www.github.com/BakkappaN/');

    //getByRole
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign in' }).click();

    //getByLabel
    await expect(page.getByLabel('Homepage', {exact : true})).toBeVisible();
    await page.getByLabel('Homepage', { exact: true }).first().click();




 
    await page.pause(); // Pause to observe the result
});