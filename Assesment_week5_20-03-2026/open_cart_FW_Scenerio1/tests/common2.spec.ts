import {test} from '@playwright/test'
import login from '../PageObjectModel/login.page'
import ChangePass from '../PageObjectModel/change.page'

test("Common Scenerio 2", async ({page})=>{
    await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/index.php")
    const log = new login(page)
    await log.navigateUrl()
    await log.loginFromJSON()
    const change = new ChangePass(page)
    await change.navigateUrl()
    await change.changePassword()
})