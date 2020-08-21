/// <reference types="cypress"/>

const el = require('../elements/CadastroElements').ELEMENTS;

let Chance = require('chance');
let chance = new Chance();

class RegisterPage {
    validarRegister(){
      cy.visit(el.visitRegister);
      cy.title().should('eq', 'Register')
    }
  
    preencherCadastro(){
      cy.get(el.inputFirstName).type(chance.first());
      cy.get(el.inputLastName).type(chance.last());
      cy.get(el.inputAdress).type('Texto para testes.');
      cy.get(el.inputEmailAdress).type(chance.email());
      cy.get(el.inputPhone).type(chance.phone( {formatted: false} ));
       
      cy.get(el.inputMale).check();
      
      cy.get(el.checkboxCricket).check('Cricket');
      cy.get(el.checkboxHockey).check('Hockey');
       
      cy.get(el.selectSkills).select('PHP');
      cy.get(el.selectcountries).select('Aruba');
      cy.get(el.selectcountry).select('Japan', {force: true});
      cy.get(el.selectyearbox).select('1990');
      cy.get(el.selectmonthbox).select('July');
      cy.get(el.selectdaybox).select('8');
    
      cy.get(el.inputfirstpassword).type('Teste@1234');
      cy.get(el.inputsecondpassword).type('Teste@1234');
    
      cy.get(el.uploadFile).attachFile('churrasco.jpeg')
    }

    submeterCadastro(){
      cy.get(el.buttonSubmit).click();
    }

    validarCadastroSucesso(){
      cy.url().should('eq', el.cadastroSucesso)
        
    }
  
  }
  
  export default new RegisterPage();