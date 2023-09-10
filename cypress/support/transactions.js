
Cypress.Commands.add('openTransactionsScreen', () => {
    cy.contains('button', 'Transactions').click()
})

Cypress.Commands.add('verifySumOfTransactions', (expected) => {
    let sum = 0
    cy.get('tr[id^=anchor]').each(($transactionRow) => {
        sum = sum + parseInt($transactionRow.find('td').eq(1).text())
    }).then(() => {
        expect(sum).equal(expected)
    })
})
