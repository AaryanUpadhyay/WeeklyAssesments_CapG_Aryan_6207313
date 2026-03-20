import {test} from '@playwright/test'
import register from '../PageObjectModel/register.page'
import login from '../PageObjectModel/login.page'
import Create from '../PageObjectModel/create.page'
import reqQuote from '../PageObjectModel/reqQuote.page'

test("E2E2", async ({page})=>{
    await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/index.php")
    const reg = new register(page)
    await reg.navigateUrl()
    await reg.registerForm()
    const log = new login(page)
    await log.navigateUrl()
    await log.loginFromJSON()
    const createPage = new Create(page);
    await createPage.navigateUrl();
    await createPage.CreateTicket();
    const quote = new reqQuote(page)
    await quote.navigateUrl()
    await quote.requestQuery()
})