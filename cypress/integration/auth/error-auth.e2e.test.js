/// <reference types="Cypress" />
import { status } from '../../fixtures/authentication/authentication-error-status';

context('Auth', () => {
    it('Покажи Алерт, если авторизовался неверно с кодом 403', function() {
        cy.viewport(300, 600);
        cy.server()
        cy.visit('/')

        // 1 Поправить status, взять из import { status }
        cy.route({
            method: 'POST',
            url: '**/api/authentication',
            response: 'fixture:authentication/authentication-error.json',
            status: status[1], //403
        }).as('auth-xhr')

        cy.findByPlaceholderText('Your username').type('smagni@workwave.com');
        cy.findByPlaceholderText('Your password').type('mysupersecretpassword');
        cy.findByRole('button', { name: 'Login' }).click();
        
        // 2 Исправить тест
        cy.findByText('An error occured, please retry').should('be.visible');
    })


    it('Покажи Алерт, если авторизовался неверно с кодом 401', function() {
        cy.viewport(300, 600);
        cy.server()
        cy.visit('/')

        cy.route({
            method: 'POST',
            url: '**/api/authentication',
            response: 'fixture:authentication/authentication-error.json',
            status: status[0], //401
        }).as('auth-xhr')

        cy.findByPlaceholderText('Your username').type('smagni@workwave.com');
        cy.findByPlaceholderText('Your password').type('mysupersecretpassword');
        cy.findByRole('button', { name: 'Login' }).click();
        
        // проверка
        cy.findByText('The credentials are wrong').should('be.visible');
    })
})