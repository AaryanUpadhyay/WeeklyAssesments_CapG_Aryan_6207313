import { expect } from '@playwright/test';
import data from "../utility/profile.json"

class Profile{
    page: any
    url:string
    alt_email:string
    address: string
    clear: any
    update: any
    constructor(page){
        this.page = page
        this.url = page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/profile.php")
        this.alt_email = page.locator('//input[@name="alt_email"]')
        this.address = page.locator('//textarea[@name="address"]')
        this.clear = page.locator('.btn.btn-default')
        this.update = page.locator('//input[@name="update"]')
    }
    async navigateUrl(){
        await this.url
    }
    async profilePage(){
        await this.alt_email.fill(data.alt_email)
        await this.address.fill(data.address)
        await this.page.screenshot({path:"profile.png"})
        if (this.update) {
            const dialogPromise = this.page.waitForEvent('dialog');
            await this.update.click();

            const dialog = await dialogPromise;
            await expect(dialog.message()).toContain("profile");
            await dialog.accept();
        }
    }
}
export default Profile