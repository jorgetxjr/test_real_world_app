class HomePage
{
    selectorsList()
    {
        const selectors={
            transactionsList:'[data-test="transaction-list"]',
            everyone:'[data-test="nav-public-tab"]',
            friends:'[data-test="nav-contacts-tab"]',
            mine:'[data-test="nav-personal-tab"]',
            newButton:'[data-test="nav-top-new-transaction"]',
            contactKristian:'[data-test="user-list-item-GjWovtg2hr"]',
            contatctDarrel:'[data-test="user-list-item-_XblMqbuoP"]',
            contatctRuthie:'[data-test="user-list-item-M1ty1gR8B3"]',
            contatctLia:'[data-test="user-list-item-WHjJ4qR2R2"]',
            amount:'[id="amount"]',
            note:'[id="transaction-create-description-input"]',
            buttonRequest:'[data-test="transaction-create-submit-request"]',
            buttonPay:'[data-test="transaction-create-submit-payment"]',
            returnButton:'[data-test="new-transaction-return-to-transactions"]',
            anotherTransactionButton:'[data-test="new-transaction-create-another-transaction"]',
            balance:'[data-test="sidenav-user-balance"]',
            emptyList: '[data-test="empty-list-header"]'
        }
        return selectors
    }

    newTransference(value,message)
    {
        cy.get(this.selectorsList().newButton).click()
        cy.get(this.selectorsList().contactKristian).click()
        cy.get(this.selectorsList().amount).type(value)
        cy.get(this.selectorsList().note).type(message)
        cy.get(this.selectorsList().buttonPay).click()
    }

    //TODO: MAKE A NEW REQUEST FUNCTION
    checkExecutedOperationSuccess()
    {
        cy.get(this.selectorsList().returnButton).should('is.visible')
        cy.get(this.selectorsList().anotherTransactionButton).should('is.visible')
    }

    checkExecutedOperationFailed()//not sure
    {
        cy.get(this.selectorsList().returnButton).should('be.disabled')
        cy.get(this.selectorsList().anotherTransactionButton).should('be.disabled')
    }
    
    checkExistTransactionsHistoric()//aprimorate this name
    {
        cy.get(this.selectorsList().mine).click()
        cy.get(this.selectorsList().transactionsList).should('be.visible')
    }

    checkNoExistTransactionsHistoric()//aprimorate this name
    {
        cy.get(this.selectorsList().mine).click()
        cy.get(this.selectorsList().emptyList).should('be.visible')
    }
}
export default HomePage