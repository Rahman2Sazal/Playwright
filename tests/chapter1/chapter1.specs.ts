//import playwright module
import {test, expect} from '@playwright/test'


// Write the test

test ('My first playwright typescript test', async({page})=>{

// navigate to the URL
await page.goto('https://www.youtube.com/');

const rejectCookies = page.getByRole('button', { name: /Tout refuser|Reject all/i });
if (await rejectCookies.isVisible()) {
	await rejectCookies.click();
}

// Search keywords

const searchBox = page.locator('textarea[name="q"]');
await searchBox.fill('playwright by testers talk');
await searchBox.press('Enter')

//Click the playlist
await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

// Validate the webpage title
await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
})





