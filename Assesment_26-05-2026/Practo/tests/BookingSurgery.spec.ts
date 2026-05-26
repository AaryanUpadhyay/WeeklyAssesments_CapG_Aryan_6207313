import {test} from '@playwright/test';
import {LoginPage} from '../POM/Login.page';
import {SurgeriesPage} from '../POM/surgeries.page';
import {HomePage} from '../POM/Home.page';


test.use({launchOptions:{slowMo: 1000}})

test("Booking Surgery", async ({page})=>{
    const loginPage = new LoginPage(page);
    const surgeriesPage = new SurgeriesPage(page);
    const homePage = new HomePage(page);
    await homePage.goto();
    await loginPage.login();
    await surgeriesPage.SurgeryPage();
    await surgeriesPage.AddDetails("Knee Replacement");
    await page.screenshot({path:'screenshot.png', fullPage:true})
})