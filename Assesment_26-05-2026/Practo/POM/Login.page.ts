import {Page, Locator} from '@playwright/test';
import login from '../dataset/credentials.json';

export class LoginPage{
    readonly page: Page;
    loginButton: Locator;
    mobileInput: Locator;
    PasswordInput: Locator;
    submitButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.loginButton = this.page.locator('//a[@name="Practo login"]');
        this.mobileInput = this.page.locator('//input[@placeholder="Mobile Number / Email ID"]');
        this.PasswordInput = this.page.locator('//input[@placeholder="Password"]');
        this.submitButton = this.page.locator('//button[@id="login"]');
    }

    async login(){
        await this.loginButton.click();
        await this.mobileInput.fill(login.number);
        await this.PasswordInput.fill(login.password);
        await this.submitButton.click();
    }
}