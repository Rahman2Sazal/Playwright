import {test, expect} from '@playwright/test';

test ('test', async ({page}) => {
  await page.goto('https://www.youtube.com/');

  const rejectButton= await page.getByRole('button', {name: /reject/i});

  if (await rejectButton.isVisible()) {
    await rejectButton.click();
    }

    const searchBox= await page.getByRole('combobox', {name: /search/i});
    await expect(searchBox).toBeVisible();
    await searchBox.click();
    await searchBox.fill('french b1 practice and podcast');
    await searchBox.press('Enter');

    await page.pause(); // Pause to observe the result

   
});
