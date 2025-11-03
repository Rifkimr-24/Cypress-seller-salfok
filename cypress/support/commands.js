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


import './commands';
import loginInvalid from '../support/pageobject/loginInvalid';

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Minified React error #418")) {
    return false; // abaikan error react
  }
});


Cypress.Commands.add('waitUntilReady', () => {
  cy.get('body', { timeout: 10000 })
    .should('not.have.attr', 'style', 'pointer-events: none;');
});




import loginPage from '../support/pageobject/Login';
// login successful
Cypress.Commands.add('loginSuccesful', (email, password) => {
  loginPage.loginSuccesful(email, password);
});

import loginInvalidPage from '../support/pageobject/loginInvalid';
// login invalid
Cypress.Commands.add('loginInvalid', (email, password) => {
  loginInvalidPage.loginInvalid(email, password);
});

import analitikPage from '../support/pageobject/analitik';
//  Validasi UI Analitik
Cypress.Commands.add('analitikPage', () => {
  analitikPage.analitik();
});

import tambahProduk from '../support/pageobject/createProduk';
// tambah produk
Cypress.Commands.add('tambahProduk', () => {
tambahProduk.tambahProdukBaru();
});

import tambahDiskon from '../support/pageobject/createDiscount'
// Tambah Diskon
Cypress.Commands.add('tambahDiskon', () => {
  tambahDiskon.buatDiskon();
});

import tambahVoucher from '../support/pageobject/createVoucher'
// Tambah Voucher
Cypress.Commands.add('tambahVoucher', () => {
tambahVoucher.tambahVoucherBaru();
});

import rekeningBank from '../support/pageobject/addATMcard';
// Tambah Rekening Bank
Cypress.Commands.add('rekeningBank', () => {
rekeningBank.addATMbank();
});



