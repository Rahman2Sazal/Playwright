import {test, expect} from '@playwright/test';

test ('test', async ({page}) => {
  await page.goto('https://www.youtube.com/');

  const rejectButton=page.getByRole('button', {name: /reject/i});

  if (await rejectButton.isVisible()) {
    await rejectButton.click();
    }

    const searchBox= page.getByRole('combobox', {name: /search/i});
    await expect(searchBox).toBeVisible();
    await searchBox.click();
    await searchBox.fill('B1 french podcast playlist');
    await page.getByRole('button', {name: 'Search', exact: true}).click();
   // await searchBox.press('Enter');

    await expect(page.getByText('B1 French Podcast').first()).toBeVisible();
  
    await page.pause(); // Pause to observe the result

    


   
});
