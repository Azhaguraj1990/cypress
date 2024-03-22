//decribe is keyword('what is to be tested)
describe('test login function',()=>{
    //it is a keyword('what type of test case')
    it('positive test case',()=>{
        // to open the web page visit fn to be used as visit('urlname')
        cy.visit("/")
      //to retrieve the data from the json file in the fixtures we have to use the cy.fixture('jsonfilename')
        cy.fixture('loginautotest').then((userinput)=>{ //to avoid asynchronisation .then to be used
         cy.get('#username').type(userinput.username)
        cy.get('#password').type(userinput.Password)
        cy.get('#submit').click()
        })
        })
})