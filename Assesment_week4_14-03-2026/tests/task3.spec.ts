import { test, expect } from '@playwright/test'

test("Verify user can upload file successfully", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator('#file-upload').setInputFiles("C:/Users/Aryan Upadhyay/OneDrive/Desktop/assesment/Day18/download/demo.txt")

    await page.locator('#file-submit').click()

    await expect(page.locator('#uploaded-files')).toContainText("demo.txt")

    await page.screenshot({path:"file.png"})

    await page.waitForTimeout(2000)

})