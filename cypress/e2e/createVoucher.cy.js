const tambahVoucher = require ('../support/pageobject/createVoucher');

describe('Tambah Voucher', () => {
  it('Berhasil Menambahkan Voucher Baru', () => {
  cy.tambahVoucher();
  });

  
})