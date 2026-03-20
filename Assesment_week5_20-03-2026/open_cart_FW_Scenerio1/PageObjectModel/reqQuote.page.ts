import { expect } from '@playwright/test';
import testData from '../utility/quote.json';

class reqQuote {
    page: any
    url: string
    name: string
    email: string
    contact: number
    company: string
    service: any
    query: string
    clear: any
    submit: any
    constructor(page) {
        this.page = page
        this.url = page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/get-quote.php")
        this.name = page.locator('//input[@name="name"]')
        this.email = page.locator('//input[@name="email"]')
        this.contact = page.locator('//input[@name="contact"]')
        this.company = page.locator('//input[@name="company"]')
        this.service = page.locator('input[type="checkbox"]');
    }
    async navigateUrl() {
        await this.url
    }

    async requestQuery() {
        //these are read only
            // await this.name.fill(testData.name);
            // await this.email.fill(testData.email);
            // await this.contact.fill(testData.contact);
        await this.company.fill(testData.company);

        for (const service of testData.services) {
            await this.page.locator(`input[value="${service.trim()}"]`).check();
        }

        if (this.query) {
            await this.query.fill("Need more details about services");
        }

        await this.page.screenshot({path:"quote.png"})
        if (this.submit) {
            const dialogPromise = this.page.waitForEvent('dialog');
            await this.submit.click();

            const dialog = await dialogPromise;
            await expect(dialog.message()).toContain("success");
            await dialog.accept();
        }
    }
}
export default reqQuote