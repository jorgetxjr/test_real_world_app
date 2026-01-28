class LoginPage
{
    selectorsList()
    {
        const selectors={
            userNameField:'[name="username"]',
            passwordField:'[name="password"]',
            rememberMeBox:'[name="remember"]',
            singInButton:'[data-test="signin-submit"]',
            newUserLink:'[data-test="signup"]',
            invalidLogin:'MuiAlert-message css-1pxa9xg-MuiAlert-message'
        }
        return selectors
    }

    acessLoginPage()
    {
        cy.visit('localhost:3000')
    }

    signInAnyUser(userName,password)
    {
        cy.get(this.selectorsList().userNameField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().singInButton).click()
    }

    rememberUser()
    {
        cy.get(this.selectorsList().rememberMeBox).click()
    }

    goToCreateNewUser()
    {
        cy.get(this.selectorsList().newUserLink).click()
    }
}
export default LoginPage