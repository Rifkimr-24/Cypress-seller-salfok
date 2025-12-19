class LoginPage {
  loginSuccesful() {
    cy.visit('https://salfok.dev/business/login');

    // verifikasi judul halaman
    cy.get('[data-slot="card-title"]').should('have.text', 'Masuk');
    cy.wait(1500);

    // isi form login valid
    cy.get('input[name="email"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .type('rifki.rahman@salfok.com');

    cy.wait(1500);

    cy.get('input[name="password"]')
      .should('be.visible')
      .and('not.be.disabled')
      .type('Bandung1993!');
    cy.wait(2000);


    cy.get('button[type="submit"]').click();
    

    
  }};

export default new LoginPage();
