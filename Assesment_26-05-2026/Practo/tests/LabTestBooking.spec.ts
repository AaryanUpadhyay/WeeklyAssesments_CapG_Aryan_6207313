import {test} from '@playwright/test';
import {LabTestPage} from '../POM/LabTest.page';
import {LoginPage} from '../POM/Login.page';
import {HomePage} from '../POM/Home.page';

test('Verify that user is able to book a lab test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
     await homePage.goto();
    const labTestPage = new LabTestPage(page);
    await loginPage.login();
    await labTestPage.LabTestBtn();
    await labTestPage.visitTest();
    await page.screenshot({path: 'labTestBooking.png'});
})