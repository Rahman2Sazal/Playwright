//import playwright module
import {test, expect} from '@playwright/test'


// Write the test for searching something on youtube using locator

test ('My first playwright typescript test', async({page})=>{


    // navigate to the URL
    await page.goto('https://www.youtube.com/');


    // reject cookies when the consent dialog is displayed
    const rejectCookies = page.getByRole('button', {
      name: /Reject the use of cookies and|Reject all|Tout refuser/i
    });

    //we can just directly wait for the button to be visible
   if ( await rejectCookies.isVisible())
    await rejectCookies.click();


   //we can add a wait for 5000 seconds for something to be visible 
   /*
    const cookiesAreVisible = await rejectCookies
      .waitFor({ state: 'visible', timeout: 5000 })
      .then(() => true)
      .catch(() => false);

    if (cookiesAreVisible) {
      await rejectCookies.click();
    }
*/
    

    //click earch bar 
    await page.getByRole('combobox', { name: 'Search' }).click();


    // Search keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

//Click the playlist
    await page.getByRole('link', { name: 'View full playlist' }).first().click();


// Validate the webpage title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

await page.pause();

})
