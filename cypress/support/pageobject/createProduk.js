const loginSuccesful = require ('../pageobject/Login'); 
import { fakeData } from '../faker'

class tambahProduk {
 tambahProdukBaru () {
     // Login Akun
     cy.loginSuccesful();
     
     // Pergi ke Menu Produk
     cy.contains('button','Produk').should('be.visible').click();
    
     // Assertion Tambah Produk
     cy.contains('p','Kelola Produk').should('exist').and('be.visible');

     
     // Klik Tambah Produk
     cy.contains('button', 'Tambah Produk', { timeout: 10000 })
     .should('be.visible')
     .click();

     cy.contains('p', 'Tambah Produk', { timeout: 10000})
     .click();
  


     cy.wait(3000)
    
     cy.contains('section', 'Informasi Produk').should('be.visible');

     // Informasi Produk
     // Upload Image
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
     cy.get('input[name="skuProduct"]', { timeout: 10000 } ).type('Baju Testing');
     cy.wait(800);

     // Harga
     cy.get('input[name="price"]').click()
     .type('{selectall}{backspace}150000');

     // Stok
     cy.wait(2000);
     cy.get('input[name="stock"]').click()
     .type('{selectall}{backspace}100');

     // Berat
     cy.contains('label', 'Berat')
     .parent()            // naik ke container
     .find('input')       // ambil input di dalamnya
     .clear()             // hapus value sebelumnya
     .type('350')


     cy.wait(2000);
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