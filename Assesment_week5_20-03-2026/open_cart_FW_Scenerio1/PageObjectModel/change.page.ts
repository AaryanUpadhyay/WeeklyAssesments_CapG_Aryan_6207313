import { expect } from '@playwright/test';
import passwords from "../utility/change.json"

class ChangePass{
    page:any
    old: string
    new: string
    confirm :string
    url : string
    clear: any
    submit:any
    text:any
    constructor(page){
        this.page = page
        this.url = page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/change-password.php")
        this.old = page.locator('//input[@name="oldpass"]')
        this.new = page.locator('//input[@name="newpass"]')
        this.confirm = page.locator('//input[@name="confirmpassword"]')
        this.clear = page.locator(".btn.btn-default")
        this.submit = page.locator(".btn.btn-primary.pull-right")
        this.text = page.locator('//div[@class="panel-body"]/p')
    }
    async navigateUrl(){
        await this.navigateUrl
    }
    async changePassword(){
        await this.old.fill(passwords.old)
        await this.new.fill(passwords.new)
        await this.confirm.fill(passwords.new)
        await this.page.screenshot({path:"change.png"})
        await this.submit.click()
        await this.page.waitForTimeout(3000)
        await expect(this.text).toBeVisible();
        await expect(this.text).toContainText('Password');
    }
}
export default ChangePass