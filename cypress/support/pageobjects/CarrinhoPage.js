/// <reference types="cypress"/>

const el = require('../elements/CarrinhoElements').ELEMENTS;

class ShopPage {
    validarShop(){
      cy.visit(el.visitShop);
      cy.contains(el.abaPractice).click()
      cy.get(el.item40).click()
    }
  
    selecionarItem(){
      cy.get(el.selecionarItem).click()
    }

    validarItemCarrinho(){
      cy.reload()
      cy.get('.cartcontents').should('contain', el.validarCarrinho)
        
    }
  
  }
  
  export default new ShopPage();