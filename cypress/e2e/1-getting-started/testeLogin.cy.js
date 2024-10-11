 /// <reference types="cypress" />

 import Login from "../../support/login";

 describe('Documentação de Cenários de Testes Automatizados', () => {
   beforeEach(() => {
     cy.visit('https://www.jusbrasil.com.br', { failOnStatusCode: false });
   })
 
   it('CT002-Realizar login', () => {
    Login.clicarbotaoEntrar();
    Login.validarURLDoEmailUsuario();
    Login.inserirEmailUsuario();
  })
   
 })