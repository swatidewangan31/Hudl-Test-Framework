class HomePage {

    //Navigate to Hudl website
    visit (url) {
        cy.visit(url);
    }

    //Click on login button then choose Hudl option
    selectOptionFromLoginDropdown (selector1, selector2) {
         cy.get(selector1).click();
         cy.get(selector2).click();
    }

    //Verify hudl home page
    verifyHudlHomePage (url) {
        cy.url().should('include', url)
    }

}

module.exports = new HomePage();