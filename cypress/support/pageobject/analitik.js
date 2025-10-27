const loginSuccesful = require ('../pageobject/Login');

class analitikPage {
    analitik () {
     cy.loginSuccesful("rifki.rahman@salfok.com", "Bandung1993!");
     cy.wait(1500);
     cy.contains('button', 'Analitik').click();

     // Validasi teks utama muncul
     cy.contains('Klik').should('be.visible');
     cy.contains('Tayangan').should('be.visible');
     cy.contains('Pesanan').should('be.visible');
     cy.contains('Pesanan Terbayar').should('be.visible');
     cy.contains('Penjualan Kotor').should('be.visible');
     cy.contains('Penjualan bersih').should('be.visible');
     cy.contains('Biaya Affiliasi').should('be.visible');
     cy.contains('Tingkat Konversi').should('be.visible');
     cy.contains('Tingkat Pembatalan').should('be.visible');
     cy.wait(2000);

    };
};
export default new analitikPage();