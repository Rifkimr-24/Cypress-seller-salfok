const loginSuccesful = require ('../pageobject/Login');

class tambahVoucher {
    tambahVoucherBaru(){
     
     // Login Akun user
     cy.loginSuccesful();

     // Masuk ke menu Voucher
     cy.contains('button','Voucher').click();
     cy.wait(1000);
     cy.contains('p', 'Voucher').should('be.visible');

     // Klik button Buat Voucher
     cy.contains('button', 'Buat Voucher').click();
     cy.wait(1000);

     // INFORMASI UMUM
     // Masukan Nama Voucher
     cy.get('input[placeholder="Masukan nama voucher"]').type('LIBURAN');
     
     // Masukan Kode Voucher
     cy.get('input[placeholder="Masukan kode voucher"]').type('LIBURAN');

     // Tipe Voucher
     

     // KONFIGURASI DISKON
     // Pilih Tipe Diskon
     cy.get('circle[cx="12"]').click();
     cy.get('input[placeholder="0"]').type('20000');

     // Minimal belanja
     cy.get('input[placeholder="0"]')
     .should('be.visible')
     .clear().type('50000');

     // Cakupan Produk Varian
     cy.get('button[data-slot="select-trigger"]').click();
     cy.contains('div', 'Semua Produk', { timeout: 5000 }).should('be.visible').click();






     

    }
}
export default new  tambahVoucher();