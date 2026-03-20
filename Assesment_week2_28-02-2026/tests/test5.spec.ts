import {test} from "@playwright/test"

test("test5", async ({page}) => {
    await page.goto("https://www.amazon.in/?&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=14862453285083557186&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061786&hvtargid=kwd-10573980&hydadcr=14453_2316415")
    await page.locator("//input[@placeholder='Search Amazon.in']").fill("shoes")
    await page.locator("//input[@id='nav-search-submit-button']").press("Enter")
    await page.waitForTimeout(3000)
    await page.locator("//span[text()='Get It by Tomorrow']").click()
    let brand = await page.locator("//h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal']").nth(4).textContent()
    console.log(brand);
    let price = await page.locator("//span[@class='a-price-whole']").nth(4).textContent()
    console.log(price);
    await page.screenshot({path:"amazontask5.png", fullPage:true})
})