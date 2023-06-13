C = CREATE
R = READ
U = UPDATE
D = DELETE

Rota "/restaurante"

[x] (R) Busca todas as mesas
[x] (C) Adiciona mesas
[x] (D) Remove mesas
[x] (U) Altera o status da mesa

Rota "/"

[x] (R) Busca por todas as mesas
[x] (U) Altera o campo "nome" da mesa correspondente

Rota "/pedidos"

[x] (R) Busca pela tabela da comanda
[x] (U) Altera a quantidade dos produtos
[x] (U) Altera o status da mesa

Rota "/cozinha"

[x] (U) Altera a quantidade de todos os produtos para 0
