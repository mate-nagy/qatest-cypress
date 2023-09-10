/// <reference types="cypress" />

describe('BankingProject', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })

    it('Question 2', () => {
        cy.customerLogin('Harry Potter')
        cy.deposit(100)
        cy.deposit(10)
        cy.deposit(5)
        cy.verifyBalance(115)
        cy.openTransactionsScreen()
        cy.verifySumOfTransactions(115)
    })
})
