class LoginPage {
  loginSuccesful() {
    cy.visit('https://dev.salfok.com/business/login');

    // verifikasi judul halaman
    cy.get('[data-slot="card-title"]').should('have.text', 'Masuk');
    cy.wait(3000);

    // isi form login valid
    cy.get('input[name="email"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .type('rifki.rahman@salfok.com');

    cy.wait(3000);

    cy.get('input[name="password"]')
      .should('be.visible')
      .and('not.be.disabled')
      .type('Bandung1993!');

    cy.wait(3000);

    cy.get('button[type="submit"]').click();

    // verifikasi login berhasil
    cy.get('[alt="salfok logo"]').should('be.visible');
    cy.wait(3000);
  }

  loginInvalid() {
    cy.visit('https://dev.salfok.com/business/login');

    // verifikasi judul halaman
    cy.get('[data-slot="card-title"]').should('have.text', 'Masuk');
    cy.wait(3000);

    // isi form login invalid
    cy.get('input[name="email"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .type('rifki.rahman@salfok.com');

    cy.wait(3000);

    cy.get('input[name="password"]')
      .should('be.visible')
      .and('not.be.disabled')
      .type('Bandung199!'); // salah password

    cy.wait(3000);

    cy.get('button[type="submit"]').click();

    // verifikasi muncul pesan error
    cy.get('[data-slot="error-message"]')
      .should('be.visible')
      .and('contain.text', 'The email or password provided is incorrect');
  }
}

export default new LoginPage();
