export class TopBar {

    MyAccountButton() {
        return cy.contains('My Account').click()
    }

    clickRegister() {
        return cy.contains('Register').click();
    }

    clickLogin() {
        return cy.contains('Login').click();
    }
    
    GoToRegisterPage() {
        this.MyAccountButton()
        this.clickRegister();
    }

    GoToLoginPage() {
        this.MyAccountButton()
        this.clickLogin();
    }

}