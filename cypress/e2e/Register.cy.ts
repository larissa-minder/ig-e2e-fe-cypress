import {TopBar} from "../pages/TopBar.page";
import {Register} from "../pages/Register.page";
const topBar = new TopBar();
const register = new Register();

describe('Register User', () => {
  it('Deve Registrar usuário', () => {
    cy.visit('/')
    topBar.GoToRegisterPage();
    var email = 'random' + Date.now() + '@gmail.com';
    register.RegisterForm('test','lastmame',email,'315782804', 'test!@154','test!@154' );
    register.accountCreatedMessage('Your Account Has Been Created!');

  })

  
})