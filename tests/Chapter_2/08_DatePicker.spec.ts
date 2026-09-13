import { test, expect } from '@playwright/test';


test ('Finding Date', async ({page}) => {

    //go to url
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//enter username and password
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

// selecting date
await page.getByRole('link', { name: 'Leave' }).click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();

// shit got tricky and I used Record to find the date
await page.getByText('22', { exact: true }).click();

// selecting year and month from dropdown
await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
await page.getByRole('listitem').filter({ hasText: '2026' }).first().click();
await page.getByRole('menu').getByText('2026').click();
await page.locator('div').filter({ hasText: /^December$/ }).click();
await page.getByText('January').click();
await page.getByText('31').click();


await page.screenshot({ path: 'Screenshots/date-picker.png' });

await  page.pause(); // Pause to observe the result


});

