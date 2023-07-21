export class Login {

    emailInput(email) {
       return cy.get('#input-email').type(email)
    }

    passwordInput(password) {
        return cy.get('#input-password').type(password)
    }

    loginButton() {
        return cy.get("input[value='Login']").click()
    }

    invalidLoginAlert() {
        return cy.get('div[class*=alert-danger]')
    }



    PerformSuccesfullLogin(email, password) {

        this.emailInput(email);
        this.passwordInput(password);
        this.loginButton();
        cy.url().should("contain", '/account')
    }

    PerformInvalidLogin(email, password, message) {

        this.emailInput(email);
        this.passwordInput(password);
        this.loginButton();
        cy.contains('Warning')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
          expect(text).to.include(message);
        });
    };



}