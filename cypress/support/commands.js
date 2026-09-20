Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('/');
  cy.get('[data-test="username"]').should('be.visible').clear().type(usuario);
  cy.get('[data-test="password"]').should('be.visible').clear().type(senha);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('cadastro', (nome, sobrenome, cep) => {
  cy.get('[data-test="firstName"]').should('be.visible').clear().type(nome);
  cy.get('[data-test="lastName"]').should('be.visible').clear().type(sobrenome);
  cy.get('[data-test="postalCode"]').should('be.visible').clear().type(cep);
  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('escolherProduto', (nomeProduto) => {
  cy.contains('[data-test="inventory-item-name"]', nomeProduto).click();
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="back-to-products"]').click();
});
