//decribe is keyword('what is to be tested)
describe('test login function',()=>{
    //it is a keyword('what type of test case')
    it('positive test case',()=>{
        // to open the web page visit fn to be used ('url')
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        //to enter text use .type()
        cy.get('#username').type('student')
        //to enter text or number use ,type()
        cy.get('#password').type('Password123')
        // to click button .click() to used
        cy.get('#submit').click()
        // to check the current page url use .url() and to check or verify the url names use .should('include','name')
        cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
        //to verify whether given names present or not use .should('have.text','text')
        cy.get('strong').should('have.text','Congratulations student. You successfully logged in!')
        // to check botton name present use .should('be.visible','botton name')
        cy.get('.wp-block-button__link').should('be.visible','logout')
        cy.get('.wp-block-button__link').click()
        // test case 2 negative way1
        cy.get('#username').type('student1')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.get('#error').should('have.text','Your username is invalid!')
        // test case 2 negative way2
        cy.get('#username').type('student')
        cy.get('#password').type('Password1234')
        cy.get('#submit').click()
        cy.get('#error').should('have.text','Your password is invalid!')
        // test case 2 negative way3
        cy.get('#username').type('student1')
        cy.get('#password').type('Password1234')
        cy.get('#submit').click()
        cy.get('#error').should('have.text','Your username is invalid!')
        

       
       
    })
})