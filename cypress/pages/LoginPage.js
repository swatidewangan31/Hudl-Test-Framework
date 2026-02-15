import {loginSelectors} from "../selectors/loginPageSelector.js"

export class LoginPage {
    
    constructor({ originUrl}) {
        this.originUrl = originUrl;
        this.emailTextField = loginSelectors.emailTextField;
        this.continuebutton = loginSelectors.continuebutton;
        this.errorMessage = loginSelectors.errorMessage;
    }
    
    //Verify Hudl Login page is displayed
    verifyHudlLoginPage() {
        cy.origin(this.originUrl, () => {
            cy.get("#custom-prompt-logo").should('be.visible')
        });
    }

    //Enter invalid email address and verify error message
    enterInValidEmailAddressAndVerify (email, expectedMessage) {
        cy.origin(this.originUrl, {args: {email, expectedMessage}},
            ({email, expectedMessage}) => {
                cy.get("#username").clear().type(email);
                cy.get('body > code > div > main > section > div > div > div > div.cc8f6f2dc.c67c08a4d > div > form > div.c264f040d > button').click();
                cy.get("#error-cs-email-invalid").should(($el) => {
                    expect($el.text().trim()).to.contain(expectedMessage);
                });
        }
    )}

    //Enter empty email address and verify error message
    enterEmptyEmailAddressAndVerify (expectedMessage) {
        cy.origin(this.originUrl, {args: {expectedMessage}},
            ({expectedMessage}) => {
                cy.get('body > code > div > main > section > div > div > div > div.cc8f6f2dc.c67c08a4d > div > form > div.c264f040d > button').click();
                cy.get("#error-cs-username-required").should(($el) => {
                    expect($el.text().trim()).to.contain(expectedMessage);
                });
        }
    )}

    //Enter valid email address, invalid password and verify error message
    enterInValidPasswordAndVerify (email, password, expectedMessage) {
        cy.origin(this.originUrl, {args: {email, password, expectedMessage}},
            ({email, password, expectedMessage}) => {
                cy.get("#username").clear().type(email);
                cy.get('body > code > div > main > section > div > div > div > div.cc8f6f2dc.c67c08a4d > div > form > div.c264f040d > button').click();
                cy.get("#password").clear().type(password);
                cy.get('body > code > div > main > section > div > div > div > form > div.c264f040d > button').click();
                cy.get("#error-element-password").should(($el) => {
                    expect($el.text().trim()).to.contain(expectedMessage);
                });
        }
    )}

    //Enter valid email address, empty password and verify error message
    enterEmptyPasswordAndVerify (email) {
        cy.origin(this.originUrl, {args: {email}},
            ({email}) => {
                cy.get("#username").clear().type(email);
                cy.get('body > code > div > main > section > div > div > div > div.cc8f6f2dc.c67c08a4d > div > form > div.c264f040d > button').click();
                cy.get('body > code > div > main > section > div > div > div > form > div.c264f040d > button').click();
                cy.get('#error-cs-password-required')
                  .should('be.visible')
                  .invoke('text')
                  .then(text => text.trim())
                  .should('match',/Enter your password\.|Your email or password is incorrect/);
        }
    )}

    //Enter valid email address, valid password and verify the home page
    enterValidCredentialsAndVerify (email, password) {
        cy.origin(this.originUrl, {args: {email, password}},
            ({email, password}) => {
                cy.get("#username").clear().type(email);
                cy.get('body > code > div > main > section > div > div > div > div.cc8f6f2dc.c67c08a4d > div > form > div.c264f040d > button').click();
                cy.get("#password").clear().type(password);
                cy.get('body > code > div > main > section > div > div > div > form > div.c264f040d > button').click();
        }
    )}

    //Verify create account page is displayed
    verifyHudlCreateAccountPage(text) {
        cy.origin(this.originUrl, {args: {text}}, 
            ({text}) => {
            cy.get("body > code > div > main > section > div > div > div > div.ulp-alternate-action._alternate-action.__s16nu9 > p > a").click();
            cy.get("body > code > div > main > section > div > div > header > h1").should(($el) => {
                    expect($el.text().trim()).to.contain(text);
            });
        });
    }

    //Reset password
    resetPassword(email, text1, text2) {
        cy.origin(this.originUrl, {args: {email, text1, text2}},
            ({email, text1, text2}) => {
                cy.get("#username").clear().type(email);
                cy.get('body > code > div > main > section > div > div > div > div.cc8f6f2dc.c67c08a4d > div > form > div.c264f040d > button').click();
                cy.get("body > code > div > main > section > div > div > div > form > p > a").click();
                cy.get("body > code > div > main > section > div > div > header > h1").should(($el) => {
                    expect($el.text().trim()).to.contain(text1);
                });
                cy.get("#email").clear().type(email);
                cy.get('body > code > div > main > section > div > div > div > form > div.c264f040d > button').click();
                cy.get("body > code > div > main > section > div > div > section > h1").should(($el) => {
                    expect($el.text().trim()).to.contain(text2);
                });       
        }
    )}
}