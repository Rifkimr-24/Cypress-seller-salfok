const tambahProduk = require ('../support/pageobject/createProduk');

describe('Tambah Produk', () => {
  it('Berhasil Menambahkan Produk Baru', () => {
  cy.tambahProduk();
  });

  
})