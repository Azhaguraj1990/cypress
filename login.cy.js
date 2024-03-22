describe('test login function',()=>{
    //it is a keyword('what type of test case')

    it('test case',()=>{
    cy.readExcelData("cypress\fixtures/book1.xlsx").then((jsonData) =>{
    const rowlenght= cypress.$(jsonData[0].data).rowlenght
    cy.log(rowlenght)
    for(let i=1; i<rowlenght;i++){
        let value=jsonData[0].data[i]
        cy.visit('/')
        cy.get('#username').type(value[0])
        cy.get('#password').type(value[1])
        cy.get('#submit').click()
    }
})    
    })
})