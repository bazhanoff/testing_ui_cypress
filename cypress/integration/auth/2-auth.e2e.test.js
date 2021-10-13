{/* <reference types="Cypress" />

//Продвинутая версия
context("Проверка авторизации", function () {
    const username = "smagni@workwave.com";
    const password = "mysupersecretpassword";

    before(function () {
        // Мокаем создание пользователей, рест создаёт пустой массив пользователей
        cy.request("POST", "http://localhost:3001/e2e-tests/wipe-data");
        // Мокаем создание пользователя, прокидываем username и password какие хотим
        cy.request("POST", "http://localhost:3001/e2e-tests/seed-data",
            {
                username: "smagni@workwave.com",
                password: "mysupersecretpassword",
            });
    });

    it("Должен работать с успешной авторизацией", function () {
        cy.viewport(600, 400);
        cy.visit("/");

        cy.findByPlaceholderText("Your username").type("smagni@workwave.com");
        cy.findByPlaceholderText("Your password").type("mysupersecretpassword");
        cy.findByRole("button", { name: "Login" }).click();

        cy.findByText("Welcome back!").should("be.visible");
    });
}); */}
