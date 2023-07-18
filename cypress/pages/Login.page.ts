export class Login {

    emailInput(email) {
        cy.get('#input-email').type(email)
    }

    passwordInput(password) {

        cy.get('#input-password').type(password)
    }


    loginButton() {
        cy.get("input[value='Login']").click()
    }


    PerformLogin(email, password) {

        this.emailInput(email);
        this.passwordInput(password);
        this.loginButton();
        cy.url().should("contain", '/account')
    }

}