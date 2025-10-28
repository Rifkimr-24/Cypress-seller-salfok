class LoginPage {
  loginSuccesful() {
    cy.visit('https://dev.salfok.com/business/login');

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

    cy.wait(4000);

    cy.get('button[type="submit"]').click();

    // verifikasi login berhasil
    cy.get('[alt="salfok logo"]').should('be.visible');
    cy.wait(2000);
  }};

export default new LoginPage();
