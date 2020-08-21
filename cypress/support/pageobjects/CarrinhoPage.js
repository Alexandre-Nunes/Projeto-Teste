/// <reference types="cypress"/>

const el = require('../elements/LoginElements').ELEMENTS;

class ShopPage {
    validarShop(){
      cy.visit('/Register.html');
      cy.contains('Practice Site').click()
      cy.get('#menu-item-40').click()
    }
  
    selecionarItem(){
      cy.get('.post-180 > .button').click()
    }

    validarItemCarrinho(){
      cy.reload()
      cy.get('.cartcontents').should('contain', '1 item')
        
    }
  
  }
  
  export default new ShopPage();