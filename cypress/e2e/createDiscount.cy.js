const tambahDiskon = require ('../support/pageobject/createDiscount');


describe('Tambah Diskon', () => {
  it('Berhasil Menambahkan Diskon Baru', () => {
  cy.tambahDiskon();
  });

  
})