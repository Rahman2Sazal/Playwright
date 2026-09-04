import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by Testers Talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');

  
  await page.getByRole('link', { name: 'View full playlist' }).first().click();

  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
  await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Testing Microsoft D365 CRM' })).toBeVisible();
  await expect(page.getByRole('link', { name: '#3 Playwright with Azure' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Playwright #1 Chapter01' })).toBeVisible();
  await page.getByRole('link', { name: 'Playwright #1 Chapter01' }).click();

  
});
