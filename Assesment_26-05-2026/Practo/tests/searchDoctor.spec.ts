import {test} from '@playwright/test';
import { LoginPage } from '../POM/Login.page';
import { HomePage } from '../POM/Home.page';
import { SearchResultPage } from '../POM/SearchResult.page';

test('Search Doctor test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    await homePage.goto();
    await loginPage.login();
    await homePage.searchDoctor();
    await searchResultPage.verifySearchResult();
    await page.waitForURL(/search/);
    await page.screenshot({path: 'searchResult.png'});
})