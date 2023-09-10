
Cypress.Commands.add('customerLogin', (user) => {
    cy.contains('button', 'Customer Login').click()
    cy.get('#userSelect').select(user)
    cy.contains('button', 'Login').click()
})
