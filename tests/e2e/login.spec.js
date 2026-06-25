import { test, expect } from "@playwright/test"

test("carga home", async ({ page }) => {
    await page.goto("http://localhost:4321")
    await expect(page)
    toHaveTitle(/Astro/)
})