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
   const podcastlink= page.getByRole('link', {name: /B1 French Podcast/i}).first();
   await expect(podcastlink).toBeVisible();
   await podcastlink.click({button: 'right'});

   const voiceSearchButton= page.getByRole('button', {name: /voice search/i});
   await expect(voiceSearchButton).toBeVisible();
   await voiceSearchButton.hover();

   const voiceToolTip= page.getByText(/Search with your voice/i);
   await expect(voiceToolTip).toBeVisible();
  
    await page.pause(); // Pause to observe the result

    


   
});
