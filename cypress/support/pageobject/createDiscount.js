const loginSuccesful = require ('../pageobject/Login');

class tambahDiskon {
    buatDiskon () {
     
        // Login Akun user
     cy.loginSuccesful();

     // Masuk ke Side Bar Menu Discount
     cy.contains('button', 'Diskon').click();
     cy.wait(2000);
     cy.contains('button', 'Buat Diskon').click();
     cy.wait(2000);
     cy.contains('p', 'Buat Kampanye Diskon').should('be.visible');
     cy.wait(1000);

     // Detail Kampanye
     cy.get('input[placeholder="Masukan nama kampanye"]').type('Liburan');

     // Periode Tanggal 
     // Buat tanggal dinamis
      cy.get(":nth-child(2) > .flex-col > #date", { timeout: 10000 }).click();
      cy.get("[data-day] > .cursor-pointer")
      .filter(":visible:not([disabled])")
      .then(($days) => {
      const randomIndex = Math.floor(Math.random() * $days.length);
      cy.wrap($days[randomIndex]).wait(500).click();

      // Tambah Produk
      cy.contains('button', 'Tambah Produk').click();
      cy.wait(2000);
      cy.contains('p', 'Pilih Varian Produk').should('be.visible');
      cy.get('button[data-slot="checkbox"]').first().click();
      cy.wait(1000);
      cy.contains('button', 'Konfirmasi')
      .should('be.visible')                     // tombol tampil di layar
      .should('not.be.disabled')                // tidak dalam keadaan disabled
      .should('have.css', 'cursor', 'pointer')  // bisa diklik
      .click();
    

      //Diskon Produk
      cy.get('input[placeholder="1-99"]').click()
      .type(20);

      // Klik Update Semua Stok
      cy.contains('button', 'Update Semua Produk').click();
      

      // Simpan Diskon
      cy.contains('button', 'Simpan').click();
      cy.contains('Kampanye diskon berhasil dibuat', { timeout: 10000 }).should('be.visible');
      cy.wait(2000);

      // Hapus Diskon
      cy.get('svg[class="tabler-icon tabler-icon-dots "]').click();
      cy.contains('div', 'Hapus').click();
      cy.wait(1500);
      cy.contains('button', 'Hapus').click();
      cy.contains('Diskon berhasil dihapus', { timeout: 10000 }).should('be.visible');







    });





    };;
}
export default new tambahDiskon();