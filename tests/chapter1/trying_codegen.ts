import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('french b1 practice and podcast');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.goto('https://www.youtube.com/playlist?list=PLpDDoTGrbDyOiGYdDd828wFkeJFDgIDye');
  await expect(page.getByText('B1 French Podcast').nth(5)).toBeVisible();

  await page.pause(); // Pause to observe the result
});