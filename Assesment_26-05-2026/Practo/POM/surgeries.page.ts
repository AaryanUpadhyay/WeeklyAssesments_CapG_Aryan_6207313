import {Page, Locator, expect} from '@playwright/test';

export class SurgeriesPage{
    readonly page: Page;
    surgeriesHeader: Locator;
    surgeriesList: Locator;
    locationFilter: Locator;
    NameFilter: Locator;
    MobileFilter: Locator;
    overlaySurgery:Locator;
    overlayLocation:Locator;
    bookBtn: Locator;

    constructor(page:Page){
        this.page = page;
        this.surgeriesHeader = this.page.locator('//a[@href="/care"]').first();
        this.surgeriesList = this.page.locator('//div[@class="generalLeadForm-module_selectors__oNbtj"]').first();
        this.locationFilter = this.page.locator('//input[@placeholder="Enter city name"]');
        this.NameFilter = this.page.locator('//input[@placeholder="Enter doctor name"]');
        this.MobileFilter = this.page.locator('//input[@placeholder="Enter mobile number"]');
        this.overlaySurgery=this.page.locator('//div[@class="BaseModal-module_content__QRGf- ScreenCenteredModal-module_content__46Djy mweb:max-h-[90%] dweb:min-h-[450px] dweb:w-[750px]"]');
        this.overlayLocation=this.page.locator('//div[@class="BaseModal-module_content__QRGf- ScreenCenteredModal-module_content__46Djy mweb:max-h-[90%] dweb:min-w-[360px] dweb:min-h-[490px]"]');
        this.bookBtn = this.page.locator('//button[@class="generalLeadForm-module_submit-cta__7eVQe"]')
    }

    async  SurgeryPage(){
        await this.surgeriesHeader.click();
        await expect(this.page).toHaveURL('https://www.practo.com/care');
    }
    async AddDetails(selectoption:string){
        await this.surgeriesList.click();
    // Wait for overlay to become visible

    // Better locator handling
    await this.overlaySurgery
        .getByText(selectoption, { exact: true })
        .click();
        await expect(this.bookBtn).toBeEnabled();
    }
}