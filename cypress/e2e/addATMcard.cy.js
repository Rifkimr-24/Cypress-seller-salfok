const rekeningBank = require('../support/pageobject/Login');

describe('Tambah ATM Card', () =>{
 it('Berhasil menambahkan kartu ATM', () => {
 cy.rekeningBank();
 });
});