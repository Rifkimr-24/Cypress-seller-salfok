// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// File ini untuk custom commands tambahan
import { faker } from '@faker-js/faker';

// Contoh custom commands menggunakan XPath
Cypress.Commands.add('clickByXpath', (xpath) => {
  cy.xpath(xpath).click();
});

Cypress.Commands.add('typeByXpath', (xpath, text) => {
  cy.xpath(xpath).type(text);
});

// Contoh custom commands dengan Faker
Cypress.Commands.add('fillRandomUserData', (formSelectors) => {
  cy.get(formSelectors.name).type(faker.person.fullName());
  cy.get(formSelectors.email).type(faker.internet.email());
  cy.get(formSelectors.phone).type(faker.phone.number());
});

import loginPage from '../support/pageobject/Login';

// login successful
Cypress.Commands.add('loginSuccesful', (email, password) => {
  loginPage.loginSuccesful(email, password);
});

// login invalid
Cypress.Commands.add('loginInvalid', (email, password) => {
  loginPage.loginInvalid(email, password);
});

import './commands';

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Minified React error #418")) {
    return false; // abaikan error react
  }
});



