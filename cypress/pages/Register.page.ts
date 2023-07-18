export class Register {

    firstNameInput(firstname) {
        return cy.get('#input-firstname').type(firstname);
    }

    lastNameInput(lastname) {
        return cy.get('#input-lastname').type(lastname);
    }

    emailInput(email) {
        return cy.get('#input-email').type(email);
    }

    EmailWithParameters(emailValue) {
        var email = emailValue + Date.now() + '@gmail.com';
        cy.get('#input-email').type(email);

    }

    telephoneInput(telephone) {
        return cy.get('#input-telephone').type(telephone);
    }

    passwordInput(value) {
        return cy.get('#input-password').type(value);
    }

    confirmPasswordInput(value) {
        return cy.get('#input-confirm').type(value);
    }

    agreeTermsCheckbox() {
        return cy.get('input[name=\'agree\']').click();
    }

    submitRegistrationButton() {
        return cy.get('input[value=\'Continue\']').click();
    }

    accountCreatedMessage(message) {
        return cy.get('#content > h1').should("have.text", message);
    }

    RegisterForm(firstName, lastName, email, telephone, password, confirmPassword) {

        this.firstNameInput(firstName);
        this.lastNameInput(lastName);
        this.emailInput(email);
        this.telephoneInput(telephone);
        this.passwordInput(password);
        this.confirmPasswordInput(confirmPassword);
        this.agreeTermsCheckbox();
        this.submitRegistrationButton();
    }



}