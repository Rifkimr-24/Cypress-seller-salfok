const loginPage = require ('../support/pageobject/Login');
const loginInvalidPage = require ('../support/pageobject/loginInvalid');

describe('Login Page', () => {
  it('login with valid data', () => {
  cy.loginSuccesful("rifki.rahman@salfok.com", "Bandung1993!");
  });

  it('Login with invalid data', () => {
  cy.loginInvalid("rifki.rahman@salfok.com", "Bandung199!");

  });
})
