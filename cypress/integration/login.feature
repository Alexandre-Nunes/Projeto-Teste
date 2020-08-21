Feature: Login
    Como usuário do site, desejo realizar o login
    Para acessar o sistema.

Scenario: Realizar login com sucesso
    Given que o usuário esteja na home
    When informo um email valido
    And submeto o login
    Then o usuario e logado com sucesso