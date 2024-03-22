import Login from "../pageobject/objectclass"
describe('test login function',()=>{
    //it is a keyword('what type of test case')
    let testcred;
    before(()=>{
        cy.fixture('loginautotest').then((data)=>{
            testcred=data;
    })
})
    it('test case',()=>{
        //to retrieve the data from the json file in the fixtures we have to use the cy.fixture('jsonfilename')
          // to open the web page visit method to be used as visit('urlname')
        cy.visit('/')
        const login=new Login()
        login.enterusername(testcred.username)
        login.enterpassword(testcred.Password)
        login.clicksubmit()
          })
        })
        