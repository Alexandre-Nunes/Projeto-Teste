/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
import LoginHooks from '../hooks/LoginHooks'

Given("que o usuário esteja na home", () => {
    LoginPage.validarHome();
})

When("informo um email valido", () => {
    LoginPage.informarEmail();
})

And("submeto o login", () => {
    LoginPage.acessarLogin();
})


Then("o usuario e logado com sucesso", () => {
    LoginPage.validarLoginSucesso();
})

