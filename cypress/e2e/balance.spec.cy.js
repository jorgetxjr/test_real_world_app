import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('RWA Test - balance',()=>{
    it('Enough balance',()=>{
        loginPage.acessLoginPage()
        loginPage.signInAnyUser
    })
    it('Exat balance',()=>{})
    it('Over balance',()=>{})
})