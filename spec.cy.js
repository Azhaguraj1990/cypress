describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.facebook.com/')
    cy.get("#email").type("rainarajakp@gmail.com")
  })
})