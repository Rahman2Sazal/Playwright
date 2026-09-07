import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('french b1 practice and podcast');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');

  // Capture a screenshot of the search page
  await page.waitForTimeout(2000); // Wait for the search results to load
  await page.screenshot({ path: 'Screenshots/YouTube Front Page.png' });

  await page.goto('https://www.youtube.com/playlist?list=PLpDDoTGrbDyOiGYdDd828wFkeJFDgIDye');

  // Capture the screenshot of the playlist page
  await page.waitForTimeout(2000); // Wait for the playlist to load
  await page.screenshot({ path: 'Screenshots/playlist-page.png', fullPage: true });

  // Capture a screenshot of the video page
  await expect(page.getByRole('link', { name: 'The Importance of Reading' })).toBeVisible();
  await page.getByRole('link', { name: 'The Importance of Reading' }).click();

  await expect(page.getByRole('heading', { name: 'The Importance of Reading Books (B1) | Learn French with Podcast | episode 33', exact: true }).locator('yt-formatted-string')).toBeVisible();
  
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'Screenshots/video-page.png' });

  await page.pause(); // Pause to observe the result


});