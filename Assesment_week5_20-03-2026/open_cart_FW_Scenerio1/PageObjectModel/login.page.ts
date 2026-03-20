import { expect } from '@playwright/test';
import loginData from "../utility/login.json"

class Login {
    url: string
    email: string;
    password: string;
    loginBtn: any;
    dashboardText: any;
    errorMsg: any;
    page : any
    constructor(page) {
        this.page = page
        this.url = page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/login.php")
        this.email = page.locator("#txtusername");
        this.password = page.locator("#txtpassword");
        this.loginBtn = page.locator('.btn.btn-primary.btn-cons.pull-right');

        this.dashboardText = page.locator("text=Dashboard").first();
        this.errorMsg = page.locator("text=Invalid");
    }

    async navigateUrl() {
        await this.url
    }

    async login(email: string, pass: string) {
        await this.email.fill(email);
        await this.password.fill(pass);

        await this.loginBtn.click();
    }
    async loginFromJSON() {
        await this.email.fill(loginData.email);
        await this.password.fill(loginData.password);
        await this.page.screenshot({path:"login.png"})
        await this.loginBtn.click();

        await expect(this.dashboardText).toBeVisible();
    }

    // async loginAndValidate(email: string, pass: string) {
    //     await this.login(email, pass);
    //     await expect(this.dashboardText).toBeVisible();
    // }

    // async invalidLogin(email: string, pass: string) {
    //     await this.login(email, pass);
    //     await expect(this.errorMsg).toBeVisible();
    // }
}

export default Login;