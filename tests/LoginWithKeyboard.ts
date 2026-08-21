import { test, expect } from '@playwright/test';

test('Login with invalid credentials', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('test12132');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('test02938');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  await page.waitForTimeout(5000); // Pause for 5 seconds
});