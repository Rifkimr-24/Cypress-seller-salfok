const loginPage = require('../support/pageobject/Login');
const loginInvalidPage = require('../support/pageobject/loginInvalid');
const rekeningBank = require('../support/pageobject/addATMcard');
const analitikPage = require('../support/pageobject/analitik');
const tambahProduk = require('../support/pageobject/createProduk');
const tambahDiskon = require('../support/pageobject/createDiscount');
const tambahVoucher = require('../support/pageobject/createVoucher');






describe('Regression', () => {
  it('Login with invalid data', () => {
  cy.loginInvalid("rifki.rahman@salfok.com", "Bandung199!");
  })
  
  it('Login with valid data', () => {
  cy.loginSuccesful("maulana10rifki@gmail.com", "Bandung1993!");
  });

  it('Validasi Dasboard Analitik', () => {
  cy.analitikPage();
  });

  it('Validasi berhasil dan hapus', () => {
  cy.rekeningBank();
  });

  it('Validasi berhasil menambahkan Produk', () => {
  cy.tambahProduk();
  });

  it('Berhasil menambahkan Diskon', () => {
  cy.tambahDiskon();
  })

  it('berhasil menambahkan voucher', () => {
  cy.tambahVoucher();
  });

  });


  

  
