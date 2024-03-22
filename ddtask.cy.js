//const { data } = require("cypress/types/jquery")

//decribe is keyword('what is to be tested)
describe('test login function',()=>{
    //it is a keyword('what type of test case')
    it('test case',()=>{
        //to retrieve the data from the json file in the fixtures we have to use the cy.fixture('jsonfilename')
        cy.fixture('login').then((data)=>{
          // to open the web page visit method to be used as visit('urlname')
          cy.visit("https://practicetestautomation.com/practice-test-login/")
          data.forEach((userdata)=>{
            cy.get('#username').type(userdata.username)
            cy.get('#password').type(userdata.password)
            cy.get('#submit').click()
            if((userdata.username='student') && (userdata.password='Password123'))
            {
              cy.get('.post-title').should('be.visible','Logged In Successfully')
              cy.get('.wp-block-button__link').click()
              cy.wait(1000)
            }
            else if((userdata.username='student') && (userdata.password!='Password123'))
              {
                cy.get('#error').eq(0).should('have.text',userdata.expected)
                cy.wait(1000)
            }
            else ((userdata.username!='student') && (userdata.password='Password123'))
            {
              cy.get('show').should('have.text',userdata.expected)
              cy.wait(1000)
            }
          })
          
        })
      
         
        })
        })