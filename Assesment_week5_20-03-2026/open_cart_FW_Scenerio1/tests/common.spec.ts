import {test} from '@playwright/test'
import register from '../PageObjectModel/register.page'
import login from '../PageObjectModel/login.page'
import Profile from '../PageObjectModel/profile.page'

test("common Scenerios", async ({page})=>{
    await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/profile.php")
    const reg = new register(page)
    await reg.navigateUrl()
    await reg.registerForm()
    const log = new login(page)
    await log.navigateUrl()
    await log.loginFromJSON()
    const profile = new Profile(page)
    await profile.navigateUrl()
    await profile.profilePage()
})