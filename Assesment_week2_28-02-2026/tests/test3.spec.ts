import { test } from "@playwright/test";

test("test3", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/");
  await page.waitForTimeout(3000);
  await page.locator("//div[@class='w-[9rem] h-[2.2rem] flex relative items-center']").first().click();
  await page.waitForTimeout(3000);

  await page.locator("(//input[@id='name'])[1]").fill("Aryan");
  await page.locator("(//input[@id='email'])[1]").fill("aryan.test001@gmail.com");
  await page.locator("(//input[@id='password'])[1]").fill("Aryan@123");
  await page.waitForTimeout(2000);

  await page.locator("//button[text()='Register']").click();
  await page.waitForTimeout(3000);

  await page.locator("(//input[@id='email'])[1]").fill("aryan.test001@gmail.com");
  await page.locator("(//input[@id='password'])[1]").fill("Aryan@123");
  await page.waitForTimeout(2000);

  await page.locator("//button[text()='Login']").click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: "qspiders.png", fullPage: true });
});
