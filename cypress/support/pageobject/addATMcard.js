const loginSuccesful = require('../pageobject/Login');

class rekeningBank {
    addATMbank () {

     // Login Akun
     cy.loginSuccesful();
     cy.wait(2000);

     // Masuk ke side baru menu
     cy.contains('button', 'Rekening Bank').click();
     cy.wait(2000);
     
     // Tambah Rekening
     cy.contains('button', 'Tambah Rekening').click();
     cy.wait(3000);
     cy.contains('h2', 'Tambah Rekening Bank').should('be.visible');

     // Pilih Bank

     
     // Masukan Nomer Rekening 0837126535
     cy.get('input[placeholder="Ketik Nomor Rekening"]').type('0837126535');
     cy.wait(2000);

     // Klik dropdown untuk membuka list
     cy.get('button[data-cy="bank-combobox"]', { timeout: 10000 })
     .should('be.visible')
     .click();

     cy.get('input[data-cy="bank-combobox-searchInput"]')
     .type('BNI (Bank Negara Indonesia)');

     cy.contains('[role="option"]', /^BNI \(Bank Negara Indonesia\)$/)
     .should('be.visible')
     .click();

     // Validasi
     cy.contains('button', 'Validasi').click();
     cy.wait(3000);

     cy.contains('div', 'Apakah akun bank ini benar?')
     .should('exist')
     .and('be.visible');

     // Konfirmasi
     cy.contains('button', 'Konfirmasi').click();
     cy.wait(2000);

     cy.contains('h2', 'Izin diperlukan').should('be.visible');

     // Masukan Kata sandi
     cy.get('input[placeholder="Masukan kata sandi"]').type('Bandung1993!');
     cy.wait(2000);

     // Buat Rekening
     cy.contains('button', 'Buat Rekening').click();
     cy.contains('Rekening berhasil ditambahkan', { timeout: 10000 }).should('be.visible');
     cy.wait(5000);

     // Hapus Rekening
     cy.contains('span', 'BNI (Bank Negara Indonesia)').click();
     cy.wait(1000);
     cy.contains('h2', 'Izin diperlukan').should('be.visible');
     cy.get('input[placeholder="Masukan kata sandi"]').type('Bandung1993!');
     cy.wait(2000);
     cy.contains('button', 'Konfirmasi').click();
     cy.wait(2000);
     cy.contains('h2', 'Detail Rekening Bank').should('be.visible');
     cy.wait(1000);
     cy.contains('button', 'Hapus').click();
     cy.contains('Rekening berhasil dihapus', { timeout: 10000 }).should('be.visible');




     



     



    
    };
};
export default new  rekeningBank();