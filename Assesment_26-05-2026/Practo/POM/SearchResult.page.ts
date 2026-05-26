import { Page, Locator, expect } from "@playwright/test";
import filterData from '../dataset/filterData.json';

export class SearchResultPage {
    readonly page: Page;
    doctorCards: Locator;
    firstDoctor: Locator;

    constructor(page: Page) {
        this.page = page;
        this.doctorCards = this.page.locator('//div[@class="listing-doctor-card"]');
        this.firstDoctor = this.page.locator('//h2[@class="doctor-name"]').first();
    }

    async verifySearchResult() {
        await expect(this.doctorCards.first()).toBeVisible();;
    }

    async openFirstDoctor() {
        await this.firstDoctor.click();
        await this.page.waitForLoadState('networkidle');
    }


    async applyExperienceFilter() {
        await this.page.locator('//div[@class="c-filter__box u-pos-rel c-dropdown"][3]').click();
        await this.page.waitForLoadState('networkidle');
        await this.page.getByText(filterData.experience).click();
        await this.page.waitForLoadState('networkidle');
    }
}