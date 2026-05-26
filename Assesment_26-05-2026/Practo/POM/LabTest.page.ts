import { Page, expect, Locator } from "@playwright/test";

export class LabTestPage {
    readonly page: Page;
    LabTestHeading: Locator;
    testName: Locator;
    addTocart: Locator;
    citySelector:Locator;

    constructor(page: Page){
        this.page = page;
        this.LabTestHeading = this.page.locator('//a[@href="/tests"]').first();
        this.testName = this.page.locator('//a[@class="u-pad--std u-border--std"]').nth(2);
        this.addTocart = this.page.locator('//div[@class="c-qc__qc-button hollow u-marginr--std"]');
        this.citySelector = this.page.locator('//li[@class="u-text--center"]');
    }
    async LabTestBtn(){
        await this.page.waitForLoadState('networkidle');
        await expect(this.LabTestHeading).toBeVisible();
        await this.LabTestHeading.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.testName).toBeVisible();
    }
    async visitTest(){
        await this.page.waitForLoadState('networkidle');
        await expect(this.testName).toBeVisible();
        await this.citySelector.nth(1).click();
         await this.page.waitForLoadState('networkidle');
        await this.testName.click();
        await this.page.waitForLoadState('networkidle');
        await this.addTocart.click();
        await this.page.waitForTimeout(3000);
    }
}