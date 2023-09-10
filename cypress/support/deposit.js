
Cypress.Commands.add('openDepositScreen', () => {
    cy.contains('button', 'Deposit').click()
})

Cypress.Commands.add('deposit', (amount) => {
    cy.openDepositScreen()
    cy.get('[ng-model="amount"]').type(amount)
    cy.get('[type="submit"]').click()
    cy.get('[ng-show="message"]').should('contain.text', 'Deposit Successful')
    cy.wait(1000)
})

Cypress.Commands.add('verifyBalance', (expected) => {
    cy.contains('Balance :').should('contain.text', 'Balance : ' + expected)
})
