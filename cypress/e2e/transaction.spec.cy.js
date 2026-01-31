import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import HomePage from '../pages/homePage.js'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('RWA Test - Transactions',()=>{
    it('User with transactions',()=>{
        loginPage.acessLoginPage()
        loginPage.signInAnyUser(userData.correctUser.userName,userData.allPassword)
        homePage.checkExistTransactionsHistoric()
    })
    it('User without transaction',()=>{
        loginPage.acessLoginPage()
        loginPage.signInAnyUser(userData.newUser.userName,userData.allPassword)
        homePage.checkNoExistTransactionsHistoric()

    })
})