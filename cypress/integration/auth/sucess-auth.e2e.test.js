/// <reference types="Cypress" />
context("Auth", () => {
  it("Должен работать с успешной авторизацией", () => {
    const username = "smagni@workwave.com";
    const password = "mysupersecretpassword";

    // 4. Дописать успешную авторизацию
    cy.viewport(400, 600);
    cy.server()
    cy.visit('/')


    cy.route({
      method: 'POST',
      url: '**/api/authentication',
      response: 'fixture:authentication/authentication-error.json',
      status: status[2],
    }).as('auth-xhr')

    cy.findByPlaceholderText('Your username').type('smagni@workwave.com');
    cy.findByPlaceholderText('Your password').type('mysupersecretpassword');
    cy.findByRole('button', { name: 'Login' }).click();

    // 2 Исправить тест
    cy.findByText('Welcome back!').should('be.visible')
  });

});
