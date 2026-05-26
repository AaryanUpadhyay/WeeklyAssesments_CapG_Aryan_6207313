import {test} from '@playwright/test';
import { LoginPage } from '../POM/Login.page';
import { HomePage } from '../POM/Home.page';
import { SearchResultPage } from '../POM/SearchResult.page';
import { DoctorProfilePage } from '../POM/DoctorProfile.page';

test("Open doctor profile and verify", async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    const doctorProfilePage = new DoctorProfilePage(page);
    await homePage.goto();
    await loginPage.login();
    await homePage.searchDoctor();
    await searchResultPage.openFirstDoctor();
    await doctorProfilePage.verifyDoctorProfile();
    await page.screenshot({path: 'doctorProfile.png'});
})