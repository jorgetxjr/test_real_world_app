import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import HomePage from '../pages/homePage.js'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('RWA Test - balance',()=>{
    it('Enough balance',()=>{
        loginPage.acessLoginPage()
        loginPage.signInAnyUser(userData.correctUser.userName,userData.allPassword)
        homePage.newTransference('10',"Loren ipsum")
        homePage.checkExecutedOperationSuccess()

    })
    it('Exact balance',()=>{
        loginPage.acessLoginPage()
        loginPage.signInAnyUser(userData.correctUser.userName,userData.allPassword)
        cy.get(homePage.selectorsList().balance)
            .invoke('text')
            .then((text)=>{
                const fullBalance = text.replace('$','').trim()
                homePage.newTransference(fullBalance,'cleaning account')
            })
        homePage.checkExecutedOperationSuccess()
    })
    it('Over balance',()=>{
        loginPage.acessLoginPage()
        loginPage.signInAnyUser(userData.correctUser.userName,userData.allPassword)
        homePage.newTransference('10000', 'Passing the balance')
        homePage.checkExecutedOperationFailed()
    })
})