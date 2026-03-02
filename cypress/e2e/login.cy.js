describe('login test', () => {
  it('login successfully', () => {
    cy.visit('/')
 
    cy.get('#gl_comcde').clear().type('QATEAM')
    cy.get('#txtusrcde').clear().type('SALYN')
    cy.get('[name="txtusrpwd"]').click().type('Salyn@1').wait(1000)
    cy.get('.loginbtn > input').click()
    cy.get('.ajs-button').click()
    cy.url().should('include', '/login_applist.php')
    cy.get(':nth-child(4) > .applist_gradient').click().wait(2000)
    cy.get('#toggle').click()
    cy.get('#\\33 89').click()
    cy.get('#men_27').click().wait(3000)

    cy.url().should('include', '/mf_division.php')

    cy.get('#pager_default_add').click().wait(2000)

    //add
    cy.get('[name="modalField[divdesc]"]').type('Division 1').wait(2000)
    cy.get('#btn_diag_save').click().wait(2000)
    cy.get('.ajs-button').click()

    //edit
    cy.get('#pager_default_edit')
    .click().wait(4000)
    cy.get('[name="modalField[divdesc]"]').clear().type('Division 2').wait(2000)
    cy.get('#btn_diag_save').click().wait(4000)
    cy.get('.ajs-button').click()

    //delete
    cy.get('#pager_default_delete').click().wait(2000)
    cy.get('.ajs-primary > .print').click().wait(2000)
    cy.get(':nth-child(16) > .ajs-modal > .ajs-dialog > .ajs-footer > .ajs-primary > .ajs-button').click().wait(2000)
    cy.get('[width="38%"]').click().wait(2000)
  
    
  })
})