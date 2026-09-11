import { test, expect } from '@playwright/test';


test('Dropdown in Playwright', async ({ page }) => {
    // go to url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    await page.getByRole ('textbox', {name: 'Username'}).fill('Admin');
    
    await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
    
    
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Leave' }).click();

    await page.getByText('-- Select --').nth(1).click();
    console.log('Dropdown clicked');
    await page.getByRole('option', { name: 'CAN - Matternity' }).click();
    console.log('Option selected by role');
    await page.getByText('CAN - Matternity').click();
    await page.getByRole('listbox').getByText('CAN - Personal').click();
    await page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first().click();
    await page.getByText('US - Matternity').click();

    await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click();
    console.log('Entitlements clicked');4

    await page.getByText('Employee Entitlements').click();
    console.log('Employee Entitlements clicked');


    await  page.pause(); // Pause to observe the result
});

