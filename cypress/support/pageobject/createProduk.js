const loginSuccesful = require ('../pageobject/Login'); 

class tambahProduk {
 tambahProdukBaru () {
     //Login Akun
     cy.loginSuccesful("rifki.rahman@salfok.com", "Bandung1993!");
     //Pergi ke Menu Produk
     cy.contains('button','Produk').click();
     cy.wait(1500);
     //Tambah Produk
     cy.contains('Kelola Produk').should('be.visible');
     cy.contains('button', 'Tambah Produk').click();
     //cy.get('button[data-slot="dropdown-menu-trigger"]').click();
     cy.contains('a','Tambah Produk').click();
     cy.contains('section', 'Informasi Produk').should('be.visible');







    };
};
export default new tambahProduk();