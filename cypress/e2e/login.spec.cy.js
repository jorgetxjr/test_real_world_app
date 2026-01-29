import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import SingInPage from '../pages/singInPage.js'
import SideMenuPage from '../pages/sideMenuPage.js'

const loginPage = new LoginPage()
const singInPage = new SingInPage()
const sideMenuPage = new SideMenuPage()

describe('RWA tests - Login and new user', () => {
  it('Login - success', () => {
    loginPage.acessLoginPage()
    loginPage.signInAnyUser(userData.correctUser.userName,userData.allPassword)
    cy.get(sideMenuPage.selectorsList().sideMenu).should('be.visible')
  })

  it('Login invalid 01',()=>{
    loginPage.acessLoginPage()
    loginPage.signInAnyUser(userData.wrongUser.userName, userData.allPassword)
    cy.get(loginPage.selectorsList().invalidLogin).should('be.visible') //not sure

  })

  it('Login invalid 02', ()=>{
    loginPage.acessLoginPage()
    loginPage.signInAnyUser(userData.correctUser.userName,userData.wrongUser.password)
    cy.get(loginPage.selectorsList().invalidLogin).should('be.visible') //not sure
  })

  it('New user with incomplete data',()=>{
    loginPage.acessLoginPage()
    loginPage.goToCreateNewUser()
    singInPage.isInCorrectPage()
    singInPage.fillForm("João","da Silva","vazio",userData.allPassword,userData.allPassword)
    cy.get(singInPage.selectorsList().userName).clear() // não dá para enviar um type vazio, então tenho que apagar depois
    singInPage.incorrectFillForm()
  })

  it('New user with different password',()=>{
    loginPage.acessLoginPage()
    loginPage.goToCreateNewUser()
    singInPage.isInCorrectPage()
    singInPage.fillForm("João","da Silva","jsilva",userData.allPassword,userData.wrongUser.password)
    singInPage.incorrectFillForm()
    
  })

  it('New user success',()=>{
    loginPage.acessLoginPage()
    loginPage.goToCreateNewUser()
    singInPage.isInCorrectPage()
    singInPage.fillForm("João","da Silva","jsilva",userData.allPassword,userData.allPassword)
    singInPage.correctFillForm()
    
  })
})