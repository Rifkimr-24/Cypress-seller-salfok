class loginInvalidPage {
  
   loginInvalid () {
    cy.visit('https://salfok.com/business/login');

    // verifikasi judul halaman
    cy.get('[data-slot="card-title"]').should('have.text', 'Masuk');
    cy.wait(3000);

    // isi form login invalid
     cy.get('input[name="email"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .type('maulana10rifki@gmail.com');

     cy.wait(3000);

     cy.get('input[name="password"]')
      .should('be.visible')
      .and('not.be.disabled')
      .type('Bandung199!');

     cy.wait(3000);

     cy.get('button[type="submit"]').click();
     cy.wait(3000);

     // verifikasi muncul pesan error
     cy.contains('The email or password provided is incorrect')
     .should('be.visible');


  };

} 
export default new loginInvalidPage();