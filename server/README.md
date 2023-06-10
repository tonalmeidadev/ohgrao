C = CREATE
R = READ
U = UPDATE
D = DELETE

Rota "/restaurante"

- (R) Busca todas as mesas
- (C) Adiciona mesas
- (D) Remove mesas
- (U) Altera o status da mesa

Rota "/"

- (R) Busca por todas as mesas
- (U) Altera o campo "nome" da mesa correspondente

Rota "/pedidos"

- (R) Busca pela tabela da comanda
- (U) Altera a quantidade do produto correspondente
- (U) Altera o status da mesa

Rota "/cozinha"

- (U) Altera a quantidade de todos os produtos para 0

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
