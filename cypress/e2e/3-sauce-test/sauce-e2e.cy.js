/// <reference types="cypress" />
import  login  from "../../fixtures/login.json";
import  cadastro  from "../../fixtures/usuarios.json";

describe('Teste de ponta a ponta no Saucelab', () => {
   
    beforeEach(() => {
        //Faz qualquer coisa antes de CADA teste
        
                cy.login(login.usuario, login.senha)
    });

    afterEach(() => {
        //cy.screenshot()
    });

    it('Deve fazer um pedido de ponta a ponta', () => {
        //Selecionar produto

        cy.escolherProduto('Sauce Labs Backpack')
        cy.escolherProduto('Sauce Labs Fleece Jacket')
        cy.screenshot()
        cy.escolherProduto('Sauce Labs Onesie')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.cadastro(cadastro[0].nome, cadastro[0].sobrenome, cadastro[0].cep)
        cy.get('[data-test="finish"]').click()
        cy.screenshot()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you')


    });
    
});

/*
Funcionalidade: Tela de Login
Como usuário do Trello
Quero me autenticar
Para criar tarefas

Cenário: fkjdkfjd
Dado que eu entre no site x (Pré requisitos)
Quando preencher os campos de autenticação (ação do usuário)
Então deve me direcionar para a tela de dashboard (resultado esperado)

Cenário: Cadastro com campos obrigatórios
Dado que eu esteja na tela de cadastro
Quando eu preencher os campos marcados com asteriscos
Então deve exibir uma mensagem de sucesso



*/