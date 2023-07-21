import { TopBar } from "../pages/TopBar.page";
import { Login } from "../pages/Login.page";


const topBar = new TopBar();
const login = new Login();

describe('Visit Page', () => {
 
  beforeEach(() => {
    cy.visit('/');
    topBar.GoToLoginPage();
  });

  it('Successfull Login', () => {
    login.PerformSuccesfullLogin('tester.validation@gmail.com', 'test1234!');
  });



  it('Invalid  error message', () => {
    login.PerformInvalidLogin('invalid@gmail.com', 'error', 'invalid error message');

  });

  it('Invalid  email', () => {
    login.PerformInvalidLogin('invalid_email@gmail.com', 'test1234!', 'Warning: No match for E-Mail Address and/or Password.');

  });

  it('Invalid  password', () => {
    login.PerformInvalidLogin('tester.validation@gmail.com', 'error', 'Warning: No match for E-Mail Address and/or Password.');
  });


  
  it('Flacky test', () => {

    const randomNumber = Math.floor(Math.random() * 2); 
    expect(randomNumber).to.equal(1);

  });



});
