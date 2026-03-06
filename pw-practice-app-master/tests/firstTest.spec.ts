import { test, expect  } from '@playwright/test'
import { PlacementTypes } from '@swimlane/ngx-charts';
import { Exception } from 'sass';

// Hooks 
// test.beforeAll(() => {})
// test.beforeEach(() => {})
// test.afterEach(() => {}) is usually put at the end of the code




test.beforeEach(async ({ page }) => {
   await page.goto('http://localhost:4200/')
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click();
})

// test.describe.only('suite2', () => { Only run this }
// test.describe.skip('suite2', () => { skip this }


// Suite 1
test.describe('suite1', () => {

  test.beforeEach(async ({ page }) => {
   
    await page.getByText('Charts').click();
  });

  test('the first test1', async ({ page }) => {
    await page.getByText('Form Layouts').click();
  });

  test('navigate to datepicker page1', async ({ page }) => {
    await page.getByText('Datepicker').click();
  });

});


// Suite 2
test.describe('suite2', () => {

  test.beforeEach(async ({ page }) => {

    await page.getByText('Forms').click();
  });

  test('the first test2', async ({ page }) => {
    await page.getByText('Form Layouts').click();
  });

  test('navigate to datepicker page2', async ({ page }) => {
    await page.getByText('Datepicker').click();
  });

});



// Locator syntax rules
test('Locator syntax rules', async ({ page }) => {
  // By Tag name
  page.locator('input')
  
  // by ID
  page.locator('#inputEmail1')

  //  Class Value
  page.locator('.shape-rectangle')

// by attribute
  page.locator('[placeholder="Email"]')

// by Class Values
  page.locator('[placeholder="Email"]')

// by attribute
  page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
  page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')


  // combine different placeholder
  page.locator('input[placeholerd="Email"][ nbinput]')

// combine different placeholder
  page.locator('//*@id="inputEmail1')
  

// by partial text match
  page.locator(':text("Using")')

// by exact text match
  page.locator(':text-is("Using the Grid")')

})

// User Facing Locators

test('User facing locators', async ({ page }) => {
  
  await page.getByRole('textbox', { name: "Email" }).first().click()
  await page.getByRole('button', {name: "Sign in"}).first().click()
  await page.getByLabel('Email').first().click()
  await page.getByPlaceholder('Jane Doe').click()
  await page.getByText('Using the Grid').click()
  await page.getByTestId('SignIn').click()
  await page.getByTitle('IoT Dashboard').click()
 
})

// Locating Child Elements
  test('locating child elemnts', async ({ page }) => {
  
  await page.locator('nb-card nb-radio :text-is("Option 1")').click()
  await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()
 
})

// Locating parent elements
test('locating parent elements', async ({ page }) => {
    await page
    .locator('nb-card', { hasText: "Using the Grid" })
    .getByRole('textbox', { name: "Email" })
    .click();

  await page.locator('nb-card', { has: page.locator('#inputEmail1') })
    .getByRole('textbox', { name: 'Email' })
    .click();

  
  
  // Simpler Option 2
await page
    .locator('nb-card')
    .filter({ hasText: "Basic form"})
    .getByRole('textbox', { name:"Email"  })
    .click();

await page
    .locator('nb-card')
    .filter({ has: page.locator('.status-danger')})
    .getByRole('textbox', { name:"Password"  })
    .click();

  // Filter by checkboxes
  await page
    .locator('nb-card')
    .filter({ has: page.locator('nb-checkbox') })
    .filter({ hasText: "Sign in" })
    .getByRole('textbox', { name:"Email"  })
    .click();
  
  
  // using XPath parent selector
  await page
    .locator(':text-is("Using the Grid")')
    .locator('..') // XPath This means go one level  upto the parent element
    .getByRole('textbox', { name: "Email" })
    .click();
});


// Reusing the locators
test('Reusing the locators', async ({ page }) => {
  const basicForm = page.locator('nb-card').filter({ hasText: "Basic Form" })  // create variables to store some values and resue them later
  const emailField = basicForm.getByRole('textbox', { name: "Email" })
  
  await emailField.fill('test@test.com')
  await basicForm.getByRole('textbox', { name: "Password" }).fill('Welcome123')
  await basicForm.getByRole('button').click()

  await expect(emailField).toHaveValue('test@test.com')
})

// Extracting different values from the DOM
test('extracting values', async ({ page }) => {
  // Single Values
  const basicForm = page.locator('nb-card').filter({ hasText: "Basic form" })
  const buttonText = await basicForm.locator('button').textContent()
  expect(buttonText).toEqual('Submit')
  
  // all text values
  const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
  expect(allRadioButtonsLabels).toContain("Option 1")

  // input value
  const emailField = basicForm.getByRole('textbox', { name: "Email" })
  await emailField.fill('test@test.com')
  const emailValue = await emailField.inputValue()
  expect(emailValue).toEqual('test@test.com')


  const placeholderValue = await emailField.getAttribute('placeholder')
  expect(placeholderValue).toEqual('Email')
})


// Assertions
test('assertions', async ({ page }) => {
  const allRadioButtonsLabels = page.locator('nb-radio').filter({hasText: "Basic form"}).locator('button')

  // General assertions
  const value = 5
  expect(value).toEqual(5)

  const text = await basicFormButon.textContent()
  expect(text).toEqual("Submit")

  // Locator assertion
 await expect(basicFormButon).toHaveText('Submit')

  // Soft assertion
  await expect(basicFormButon).toHaveText('Submit5')
  await basicFormButon.click()
})

// Await
