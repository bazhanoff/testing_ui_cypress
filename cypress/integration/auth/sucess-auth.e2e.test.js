/// <reference types="Cypress" />
import { status } from '../../fixtures/authentication/authentication-error-status';

context("Auth", () => {
    it("Должен работать с успешной авторизацией", () => {
        const username = "smagni@workwave.com";
        const password = "mysupersecretpassword";
        cy.viewport(300, 600);
        cy.server()
        cy.visit('/')

        // 4. Дописать успешную авторизацию
        cy.route({
          method: 'POST',
          url: '**/api/authentication',
          response: 'fixture:authentication/authentication-error.json',
          status: status[2], //200
      }).as('auth-xhr')

      cy.findByPlaceholderText('Your username').type(username);
      cy.findByPlaceholderText('Your password').type(password);
      cy.findByRole('button', { name: 'Login' }).click();
      
      // проверка
      cy.findByText('Welcome back!').should('be.visible');
  });

});
