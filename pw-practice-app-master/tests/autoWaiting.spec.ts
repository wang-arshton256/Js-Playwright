import { test, expect } from '@playwright/test'

// test.beforeAll(() => {})
// test.beforeEach(() => {})
// test.afterEach(() => {}) is usually put at the end of the code


test.use({ ignoreHTTPSErrors: true }) // Ignore HTTPS errors (fastest for testing) 

test.beforeEach(async ({ page }) => {
    await page.goto('https://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering Ajax Request').click()
    testInfo.setTimeout(testInfo.timeout + 2000) // To increase timeout for a particular task
})

test('auto waiting', async ({ page }) => {
      test.setTimeout(40000)
    const successButton = page.locator('.bg-success')

    // await successButton.click();

    const text = await successButton.textContent()
  
    expect(text).toContain('Data loaded with AJAX get request.')
})

// Timeouts
test('timeouts', async ({ page }) => {
    test.setTimeout(16000)
    const successButton = page.locator('.bg-success')
    /* test.slow() ====> To increase timeout for this particular task, you can use the slow ,methods slows down the loading by 
    
    */
    
   // expect(text).toContain('Data loaded with AJAX get request.')
})