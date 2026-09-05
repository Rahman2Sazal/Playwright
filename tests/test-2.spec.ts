import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.goto('https://www.youtube.com/watch?v=2poXBtifpzA&list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');
  await page.pause();
});