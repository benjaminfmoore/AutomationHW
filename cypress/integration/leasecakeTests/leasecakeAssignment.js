//These tests are designed to use features on the UI Testing Playground
//The first test is using the login feature on the site.
//By creating two variables of "username" to be "ben" and "password" to be "pwd" we can pass them into our text fields
//We then check the button first to make sure it has the "Log in" text
//After we check that the button has "Log In" on it we can click it
//We then check and verify that we have logged in by seeing the "Log Out" button change


describe('UI login test', function () {
    it('logs in a username', function (username = "ben", password = "pwd") {
        // Visit the website
        cy.visit('http://www.uitestingplayground.com/sampleapp')
        // Find the login elements
        // Input Username
        cy.get("input[name=UserName]").type(username)
        // Input Password
        cy.get("input[name=Password]").type(password)
        // Click Login
        cy.get('.btn').should("have.text", "Log In").click()
        // Confirm
        cy.get('.btn').should("have.text", "Log Out")
    })
})

//On the second test we load the page as it takes a while on load delay
//Because Cypress naturally waits until the page loads the last line of code involving the button appearing after delay will be clicked.

describe('Load Delay Test', function () {
    it('tests for load delay', function () {
        // Visit the website
        cy.visit('http://www.uitestingplayground.com/loaddelay')
        // Wait for Load Delay
        // Confirm and press button
        cy.get('.btn').should("have.text", "Button Appearing After Delay").click()
    })
})

//On the third test we wait out a delay for clicking on a button
//With the test the instructions stated that the delay will take about 15 seconds. 
//To thwart this, we put in a "timeout" function in our last assertion. 
//Even though we put in a 20 second timeout, the code will fire as soon as it appears.

describe('Client Delay Test', function () {
    it('Tests for the delay on client side after click', function () {
        //Visit the website
        cy.visit('http://www.uitestingplayground.com/clientdelay')
        //Click the button
        cy.get('.btn').should('have.text', "Button Triggering Client Side Logic").click()
        //Confirm that the delay was waited
        cy.get(".bg-success", { timeout: 20000 }).should('have.text', "Data calculated on the client side.")
    })
})