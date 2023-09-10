/// <reference types="cypress" />

it('Question 1', () => {
    // ...
    cy.get('[name="username"]').clear().type('Hello World')
    cy.get('button[type="submit"]').should('be.visible').and('have.text', 'Log me in').click()
})

