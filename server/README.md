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

ESQUEMA DA TABELA:

{
"command": number,
"isActive": boolean,
"status": string,
"name": string,
"coffe1": number,
"coffe2": number,
"coffe3": number,
"coffe4": number,
"coffe5": number,
"coffe6": number,
"coffe7": number,
"capuccino1": number,
"capuccino2": number,
"frapuccino1": number,
"frapuccino2": number
}
