import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http//localhost/4200')
})

test.describe('From Layouts page', () => {
    test.beforeEach(async ({ page }) => {
        test.beforeEach(async ({ page }) => {
   
            await page.getByText('Charts').click();
        });

        test('the first test1', async ({ page }) => {
            await page.getByText('Form Layouts').click();
        });
    })


    // Testing input fields
    test('input fields', async ({ page }) => {
        // Create a locator as illustrated belows
        const usingTheGridEmailInput = page.locator('nb-card', { hasText: "Using the grid" }).getByRole('textbox', { name: "Email" })

        // Type a message to the input field
        await usingTheGridEmailInput.fill('test@test.com')

        // Method 2 to input to the  input field while simulating strokes of the keyboard
        await usingTheGridEmailInput.pressSequentially('test2@test.com')
        
        // Slowiing down/simulating the key strokes, pass the delay aurgument
        await usingTheGridEmailInput.pressSequentially('test2@test.com', { delay: 500 })

        // Clear a message from the input field
        await usingTheGridEmailInput.clear()


        // Input field generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test@test.com')

        // Input fie;d Locator assertion
        await expect(usingTheGridEmailInput)toHaveValue ('test2@test.com')

    })

    test('radio buttons', async ({ page }) => {
        const usingTheGridForm = page.locator('nb-card', { hasText: "Using the Grid" })
        
        // await usingTheGridEmailInput = page.locator('option 1').check({force:true})
        await usingTheGridForm.getByRole('radio', { name: "Option 1" }).check({ force: true })
        const radioStatus = await usingTheGridForm.getByRole('radio', { name: "Option 1" }).isChecked()
        expect(radioStatus).toBeTruthy()

        await usingTheGridForm.getByRole('radio', { name: "Option " }).check({ force: true })
        expect await usingTheGridForm.getByRole('radio', { name: "Option 1" }).isChecked.toBeFalsy()
        expect await usingTheGridForm.getByRole('radio', { name: "Option 1" }).isChecked.toBeTrue()
        
    })

    test('checkboxes', async({ page) =? {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Modal & Overlays').click()
})
})
    