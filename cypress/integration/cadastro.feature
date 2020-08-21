Feature: Cadastro de Usuário
    Como usuário do site, desejo realizar um Cadastro
    Para que possa acessar o sistema.

Scenario: Cadastro de novo usuário com sucesso
    Given que o usuário esteja na pagina de Register
    When informo os dados do usuario
    And submeto o cadastro
    Then o usuario e cadastrado com sucesso
