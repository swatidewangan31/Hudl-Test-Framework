/// <reference types="cypress"/>

//importing selectors/locators
import {loginSelectors} from "../selectors/loginPageSelector.js"

//Calling pages
import { LoginPage } from '../pages/LoginPage';
const loginPage = new LoginPage({ originUrl: url.identityUrl, emailTextField: loginSelectors.emailTextField });
const homePage = require ("../pages/HomePage.js");

//importing test datas
import url from '../fixtures/urls.js'
import errorMsg from '../fixtures/errorMessages.js'
import {invalidEmailAddressTestData} from "../fixtures/loginTestData.js"
import credentials from "../fixtures/passwordTestData.js"

describe('Login Tests with positive and negative scenarios', () => {

  //Run before each testcases
  beforeEach(() => {
    homePage.visit(url.mainUrl)
    homePage.selectOptionFromLoginDropdown(loginSelectors.loginButton, loginSelectors.hudlOption)
    loginPage.verifyHudlLoginPage();
  })

  //Testcases

  //Login with empty credentials
  it('Empty Email Address and continue', () => {
     loginPage.enterEmptyEmailAddressAndVerify(errorMsg.emptyEmailErrorMessage)
  })

  //Login with invalid email address
  invalidEmailAddressTestData.forEach(invalidEmail => {
    it('Invalid Email Address Tests', () => {
      loginPage.enterInValidEmailAddressAndVerify(invalidEmail.text, errorMsg.invalidEmailErrorMessage)
    })
  })

  //Login with invalid password
  it('Login with valid email address and invalid password', () => {
      loginPage.enterInValidPasswordAndVerify(credentials.email, credentials.invalidPassword, errorMsg.invalidPasswordErrorMessage)  
  })

  //Login with empty password
  it(' Login with valid email address and empty password', () => {
      loginPage.enterEmptyPasswordAndVerify(credentials.email)  
  })

  //Login with valid credentials
  it(' Login with valid email address and valid  password', () =>{
      loginPage.enterValidCredentialsAndVerify(credentials.email)  
      homePage.verifyHudlHomePage(url.homePageUrl)
  })
})  