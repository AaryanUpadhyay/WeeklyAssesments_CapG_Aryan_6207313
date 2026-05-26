import { Page, Expect, Locator } from '@playwright/test';
import searchData from '../dataset/searchData.json';

export class HomePage {
    readonly page: Page;
    location: Locator;
    search: Locator;

    constructor(page: Page) {
        this.page = page;
        this.location = this.page.locator('input[placeholder*="Search location"]');
        this.search = this.page.locator('input[placeholder*="Search doctors"]');
    }

    

    async goto() {
        await this.page.goto("https://www.practo.com/");
    }

    async searchDoctor() {
        await this.location.fill(searchData.city);
        await this.search.fill(searchData.speciality);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press("Enter");
        await this.page.waitForLoadState('networkidle');
    }

}