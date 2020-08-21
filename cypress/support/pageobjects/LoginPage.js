/// <reference types="cypress"/>

const el = require('../elements/LoginElements').ELEMENTS;
let Chance = require('chance');
let chance = new Chance();

class LoginPage {
    validarHome(){
      cy.visit('/Index.html');
    }
  
    informarEmail(){
      cy.get('#email').type(chance.email());
      cy.get('#enterimg').click()
    }

    acessarLogin(){
      cy.get('button[id="submitbtn"]').click();
    }

    validarLoginSucesso(){
      cy.url().should('eq', 'http://demo.automationtesting.in/Register.html')
        
    }
  
  }
  
  export default new LoginPage();