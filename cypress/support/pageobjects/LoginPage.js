/// <reference types="cypress"/>

const el = require('../elements/LoginElements').ELEMENTS;
let Chance = require('chance');
let chance = new Chance();

class LoginPage {
    validarHome(){
      cy.visit(el.visitHome);
    }
  
    informarEmail(){
      cy.get(el.inputEmail).type(chance.email());
    }

    acessarLogin(){
      cy.get(el.botaoEntrar).click()
    }

    validarLoginSucesso(){
      cy.url().should('eq', el.validaSucesso)
        
    }
  
  }
  
  export default new LoginPage();