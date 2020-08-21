/* global Given, Then, When */

import ShopPage from '../pageobjects/CarrinhoPage'
import LoginHooks from '../hooks/LoginHooks'

Given("que o usuário esteja na pagina de shop", () => {
    ShopPage.validarShop();
})

When("selecionar um item", () => {
    ShopPage.selecionarItem();
})

Then("o item e adicionado ao carrinho com sucesso", () => {
    ShopPage.validarItemCarrinho();
})

