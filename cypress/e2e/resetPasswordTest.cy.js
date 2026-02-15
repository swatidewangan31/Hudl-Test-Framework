/// <reference types="cypress"/>

//importing selectors/locators
import {loginSelectors} from "../selectors/loginPageSelector.js"

//Calling pages
import { LoginPage } from '../pages/LoginPage';
const loginPage = new LoginPage({ originUrl: url.identityUrl, emailTextField: loginSelectors.emailTextField });
const homePage = require ("../pages/HomePage.js");

//importing test datas
import url from '../fixtures/urls.js'
import credentials from "../fixtures/passwordTestData.js"

describe('Reset password and verify', () => {

  //Run before each testcases
  beforeEach(() => {
    homePage.visit(url.mainUrl)
    homePage.selectOptionFromLoginDropdown(loginSelectors.loginButton, loginSelectors.hudlOption)
    loginPage.verifyHudlLoginPage();
  })

  //Testcases
  //Forgot Password
  it('Reset password', () => {
    loginPage.resetPassword(credentials.email, credentials.resetPasswordHeader, credentials.checkEmailHeader)
  })
})  