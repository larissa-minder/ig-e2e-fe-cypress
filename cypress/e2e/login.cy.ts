import { TopBar } from "../pages/TopBar.page";
import { Login } from "../pages/Login.page";


const topBar = new TopBar();
const login = new Login();

describe.only('Visit Page', () => {
  before(function () {
    cy.fixture('login-users').then(function (users) {
      this.users = users;
    });
  });

  it.only('Successfull Login', function () {
    cy.visit('/');
    topBar.GoToLoginPage();

    const user = (this as any).users.success;

    login.PerformLogin(user.email, user.password);
  });
});
