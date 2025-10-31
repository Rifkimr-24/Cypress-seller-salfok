const loginSuccesful = require ('../pageobject/Login');
import { fakeData } from '../faker' ;

class tambahVoucher {
    tambahVoucherBaru(){
     
     // Login Akun user
     cy.loginSuccesful();

     // Masuk ke menu Voucher
     cy.contains('button','Voucher').click();
     cy.wait(1000);
     // cy.contains('p', 'Voucher').should('be.visible');

     // Klik button Buat Voucher
     cy.contains('button', 'Buat Voucher').click();
     cy.wait(1000);

     // INFORMASI UMUM
     // Masukan Nama Voucher
     cy.get('input[placeholder="Masukan nama voucher"]').type(fakeData.voucherName);
     cy.wait(1000);
     
     // Masukan Kode Voucher
     cy.get('input[placeholder="Masukan kode voucher"]').type(fakeData.voucherCode);
     cy.wait(1000);

     // Tipe Voucher
     cy.contains('[data-slot="select-trigger"]', 'Produk').click();
     cy.contains('[data-slot="select-item"]', 'Produk').should('be.visible').click();

     // KONFIGURASI DISKON
     // Pilih Tipe Diskon
     cy.contains('Nominal Tetap').click();
     cy.get('input[placeholder="0"]').first().clear().type('20000');
     cy.wait(1000);



     // Minimal belanja
     cy.contains('Minimal Belanja')
     .parent() // pindah ke container input
     .find('input[placeholder="0"]')
     .clear()
     .type(fakeData.minPurchase);

     // Cakupan Produk Varian
     cy.contains('[data-slot="select-trigger"]', 'Semua Produk').click();
     cy.contains('[data-slot="select-item"]', 'Semua Produk').should('be.visible').click();

     // Targer dan Visibility
     cy.contains('[data-slot="select-trigger"]', 'Publik (Default)').click();
     cy.contains('[data-slot="select-item"]', 'Publik (Default)').should('be.visible').click();
     cy.wait(1000);
     // Assertion Target Affiliate
     cy.get('label[data-slot="label"]').should('be.visible');

     // Periode Voucher
      cy.get(":nth-child(2) > .flex-col > #date", { timeout: 10000 }).click();
      cy.get("[data-day] > .cursor-pointer")
      .filter(":visible:not([disabled])")
      .then(($days) => {
      const randomIndex = Math.floor(Math.random() * $days.length);
      cy.wrap($days[randomIndex]).wait(500).click();})


     // Tampilkan Ke Pembeli
     // Pastikan toggle sudah ON
     cy.get('button[role="switch"]')
     .should('have.attr', 'aria-checked', 'true');

     // Kuota dan Batas Pemakaian
     // Total Kuota Voucher
     cy.get('input[placeholder="Masukan Kuota Voucher"]').type(fakeData.maxDiscount);

     // Kuota Setiap Pembeli
     cy.get('input[placeholder="Maks kuota voucher untuk setiap pembeli"]').type(fakeData.kuotaPembeli);

     // Klik Buat Voucher
     cy.contains('button', 'Buat Voucher').click();
     cy.wait(2000);
     cy.contains('Voucher berhasil dibuat', { timeout: 10000 }).should('be.visible');
     cy.wait(2000);

     // Hapus Voucher
     //cy.get('button[data-slot="dropdown-menu-trigger"]').first().click();

     // Tunggu menu muncul
     //cy.get('div[role="menuitem"]').contains('Hapus', { timeout: 5000 }).should('be.visible').click();

     //cy.contains('button', 'Hapus').click();
     //cy.contains('Voucher berhasil dihapus', { timeout: 10000 }).should('be.visible');









     

    }
}
export default new  tambahVoucher();