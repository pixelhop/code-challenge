import { test, expect } from '@playwright/test'

test('homepage details', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Ocean Grid Navigator')
  await expect(page.locator('h1').first()).toHaveText('Ocean Grid Navigator')
})
