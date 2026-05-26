import {test} from '@playwright/test';
import { LoginPage } from '../POM/Login.page';
import { HomePage } from '../POM/Home.page';
import { SearchResultPage } from '../POM/SearchResult.page';

test("Filter Search Result test", async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    await homePage.goto();
    await loginPage.login();
    await homePage.searchDoctor();
    await searchResultPage.applyExperienceFilter();
    await searchResultPage.verifySearchResult();
    await page.screenshot({path: 'filteredSearchResult.png'});
})