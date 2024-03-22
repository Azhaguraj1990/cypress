describe('Basic Auto Test',()=>{
    it('Basic element check',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[value='radio1']").check().should('be.checked')
        cy.get("input[value='radio3']").check().should('be.checked')
        cy.get("input[value='radio1']").should('not.be.checked')
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option2']).should('be.checked')
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
        cy.get('.cen-left-align #autocomplete').type('in')
        cy.get('#autocomplete').each(($el1,index,$list)=>{
            if($el1.text().includes('india')){
                cy.wrap($el1).click()
            }
        })
        
    })
})