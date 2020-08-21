Feature: Adicionar itens ao carrinho
    Como usuário do site, desejo adicionar itens ao carrinho
    Para realizar minhas compras.

Scenario: Adicionar itens ao carrinho com sucesso
    Given que o usuário esteja na pagina de shop
    When selecionar um item
    Then o item e adicionado ao carrinho com sucesso