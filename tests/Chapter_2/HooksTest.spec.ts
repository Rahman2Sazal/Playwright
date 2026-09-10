import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before all tests');
});

test.beforeEach (async () => {
    console.log('Before each test');
}); 

test.afterEach(async () => {
    console.log('After each test');
});


test.afterAll(async () => {
    console.log('After all tests');
});

test('Locators in Playwright', async ({ page }) => {

    console.log('Test started');
  
    // go to url
    await page.goto('https://www.github.com/BakkappaN/');

    //getByRole
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign in' }).click();

    //getByLabel
    await expect(page.getByLabel('Homepage', {exact : true})).toBeVisible();
    await page.getByLabel('Homepage', { exact: true }).first().click();

    console.log('Test completed');


 
    await page.pause(); // Pause to observe the result
});