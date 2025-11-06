const loginSuccesful = require ('../pageobject/Login'); 
import { fakeData } from '../faker';

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

     //Informasi Produk
     //Upload Image
     cy.contains('span', 'Upload Image').click();
      // Upload gambar
     cy.get('input[type="file"]').attachFile('images/foto-produk.jpg', { force: true });
     cy.wait(1000);
     cy.get('button svg.lucide-trash2').should('exist');
     // Masukan Link Youtube
     cy.get('input[name="videoUrl"]').type('https://www.youtube.com/watch?v=-WN-sGhqjIA');
     // Masukan Nama Produk
     cy.get('input[name="name"]').type(fakeData.productName);
     // Masukan Kategori
     cy.get('div.cursor-pointer').contains('Pilih kategori produk').click();
     cy.wait(2000);
     cy.contains('h2', 'Kategori').should('be.visible');
     cy.contains('button', 'Fashion Pria').click();
     cy.contains('button', 'Pakaian Pria').click();
     cy.contains('button', 'Terapkan Kategori').click();
     // Masukan Deksripsi
     cy.get('div[contenteditable="true"]').click({ force: true }).type(fakeData.productDesc);
     cy.wait(800);

     // Informasi Pesanan
     // SKU
     cy.wait(2000);
     cy.get('input[name="skuProduct"]').type('Baju Testing');
     cy.wait(800);

     // Harga
     cy.wait(2000);
     cy.get('input[name="price"]').click()
     .type('{selectall}{backspace}150000');
     cy.wait(500);

     // Stok
     cy.wait(2000);
     cy.get('input[name="stock"]').click()
     .type('{selectall}{backspace}100');
     cy.wait(500);

     // Berat
     cy.wait(2000)
     cy.get('input[name="weight.value"]').click()
     .type('{selectall}{backspace}300');
     cy.wait(500)
     cy.contains('kg').should('be.visible'); // optional: pastikan dropdown muncul
     cy.contains('g').click();

     // Volume (P x L x T)
     cy.get('input[name="volume.length"]', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true })
     .clear()
     .type('8');
     
     cy.get('input[name="volume.width"]', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true })
     .clear()
     .type('8');
     
     cy.get('input[name="volume.width"]', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true })
     .clear()
     .type('8');
     
     
     //Jumlah Minimal Pemesanan
     cy.get('input[name="minQty"]', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true })
     .clear()
     .type('1');

     //Pengaturan Affiliasi
     //Presentase Komisi
     cy.get('input[name="allCommissions.commissionPercentage"]', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true })
     .clear()
     .type('5');

     //Periode Affiliasi
     cy.get('button#date').click();
     cy.wait(1500);
     cy.contains('button', '30 Hari Kedepan').click();
     cy.wait(1500);
     cy.get('button#date').click();

     //Submit Buat Produk
     cy.contains('button', 'Buat Produk').click();
     cy.contains('Produk berhasil dibuat', { timeout: 10000 }).should('be.visible');




    };
};
export default new tambahProduk();