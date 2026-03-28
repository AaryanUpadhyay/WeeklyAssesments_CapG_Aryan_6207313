import test from '@playwright/test'
import login from '../PageObjectModel/login.page'
import reqQuote from '../PageObjectModel/reqQuote.page'

test("E2ES3", async ({page}) =>{
    await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/index.php")
    const log = new login(page)
    await log.navigateUrl()
    await log.loginFromJSON()
    const quote = new reqQuote(page)
    await quote.navigateUrl()
    await quote.requestQuery()
})