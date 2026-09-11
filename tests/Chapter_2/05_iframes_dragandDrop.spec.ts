import {test, expect} from '@playwright/test';

test('Drag and Drop in Playwright', async ({ page }) => {
    // go to url
    await page.goto('https://jqueryui.com/droppable/');

    
    const iFrame = page.frameLocator('[class="demo-frame"]');

    const dragElement = iFrame.locator('id=draggable');
    const dropElement = iFrame.locator('id=droppable');

    await dragElement.dragTo(dropElement);







    await page.pause(); // Pause to observe the result




});

