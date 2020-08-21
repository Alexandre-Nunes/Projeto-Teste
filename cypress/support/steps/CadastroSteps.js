/* global Given, Then, When */

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import RegisterPage from '../pageobjects/CadastroPage'
import LoginHooks from '../hooks/LoginHooks'

Given("que o usuário esteja na pagina de Register", () => {
    RegisterPage.validarRegister();
})

When("informo os dados do usuario", () => {
    RegisterPage.preencherCadastro();
})

And("submeto o cadastro", () => {
    RegisterPage.submeterCadastro();
})


Then("o usuario e cadastrado com sucesso", () => {
    RegisterPage.validarCadastroSucesso();
})

