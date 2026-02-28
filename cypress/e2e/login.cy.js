describe('login test', () => {
  it('login successfully', () => {
    cy.visit('/')
    cy.get('#gl_comcde').clear().type('QATEAM')
    cy.get('#txtusrcde').clear().type('ADRIAN')
    cy.get('[name="txtusrpwd"]').click().type('Ess@1234').wait(3000)
    cy.get('.loginbtn > input').click()
    cy.get('.ajs-button').click()
    cy.url().should('include', '/login_applist.php')
  })
})