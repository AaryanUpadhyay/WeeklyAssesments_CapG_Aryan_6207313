import { expect } from '@playwright/test';
import testData from '../utility/register.json'; 
class register{
    name: string
    emailId: string
    password : string
    cpassword : any
    phone : number
    submit : any
    url : any
    signInText : any
    page : any
    constructor(page){
        this.page = page
        this.url = page.goto('http://49.249.28.218:8081/TestServer/Build/Small_CRM/registration.php')
        this.name = page.locator("#name")
        this.emailId = page.locator("#email")
        this.password = page.locator("#password")
        this.cpassword = page.locator('#cpassword')
        this.phone = page.locator("#txtpassword")
        this.submit = page.locator('.btn.btn-primary.btn-cons.pull-right')
        this.signInText = page.locator('//div/h2')
    }
    async navigateUrl(){
        await this.url
    }
    async registerForm(){
        const user = testData.user;

        await this.name.fill(user.name);
        await this.emailId.fill(user.email);
        await this.password.fill(user.password);
        await this.cpassword.fill(user.confirmPassword);
        await this.phone.fill(user.mobile.toString());
        await this.page.screenshot({path:"register.png"})
        await this.submit.click();
        await expect(this.signInText).toBeVisible();
        await expect(this.signInText).toHaveText("Sign in to CRM");
    }
}
export default register