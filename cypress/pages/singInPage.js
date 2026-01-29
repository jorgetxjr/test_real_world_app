class SingInPage
{
    selectorsList()
    {
        const selectors={
            firstName:'[name="firstName"]',
            lastName:'[name="lastName"]',
            userName:'[name="username"]',
            password:'[name="password"]',
            confirmPassword:'[name="confirmPassword"]',
            confirmButton:'[data-test="signup-submit"]',
        }
        return selectors
    }
    
    fillForm(firstName,lastName,userName,password,confPassword)
    {
        cy.get(this.selectorsList().firstName).type(firstName)
        cy.get(this.selectorsList().lastName).type(lastName)
        cy.get(this.selectorsList().userName).type(userName)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().confirmPassword).type(confPassword)
    }

    isInCorrectPage()
    {
        cy.location("pathname").should("equal","/signup")
    }

    correctFillForm()
    {
        //cy.get(this.selectorsList().confirmButton).should('be.enable')//really not!
        cy.get(this.selectorsList().confirmButton).click()
        //APÓS CLICAR, O QUE ACONTECE??? volta para a página inicial, com uma URL diferente
        cy.location("pathname").should("equal","/signup")
    }

    incorrectFillForm()
    {
        cy.get(this.selectorsList().confirmButton).should('be.disabled')//not sure
    }

}
export default SingInPage