const pageobject = require ('../support/pageobject/Login');
const support = require ('../support/commands');

describe('Login Page', () => {
  it('should show login form after visit', () => {
  cy.loginSuccesful("rifki.rahman@salfok.com", "Bandung1993!");
  });

  it('Login with invalid data', () => {
  cy.logiInvalid("rifki.rahman@salfok.com", "Bandung199!");

  });
})
