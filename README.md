# Coodesh Challenge
This is a challenge by [Coodesh](https://coodesh.com/)

Este projeto foi desenvolvido baseado na api da [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation), sendo um Tech Challenge proposto pela [Coodesh](https://coodesh.com/) para pôr em prática minha capacitação técnica como desenvolvedor Node.Js Back End Jr.
## Autores

- [@torr7s](https://www.github.com/torr7s)



## Apresentação

- [Vídeo de apresentação do projeto](https://www.loom.com/share/88df986fc8304e1b9f376d052510c5a4)


## Licença

[GPL 3.0](https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt)


## Stacks utilizadas
- Node.Js
- Docker
- Typescript
- NestJs
- Mongoose
- Swagger 


## Variáveis de Ambiente

Configure as variáveis de ambiente:

```bash
BASE_URL         = ""

MONGODB_USERNAME = ""
MONGODB_PASSWORD = ""
MONGODB_DATABASE = ""

MONGODB_URI      = mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.ihtbf.mongodb.net/${MONGODB_DATABASE}
```
## Instalação

Este projeto foi configurado com Docker, portanto, basta adicionar corretamente as variáveis de ambiente no seu projeto e executar os seguintes comandos:

```bash
  docker build -t coodesh .
```

```base
  docker-compose up
```

### Configuração

Adicione o seu ip e o ip do container, criado a partir do deploy com Docker, no site do [mongodb](https://cloud.mongodb.com/). Para conseguir obter o ip do container, execute o seguinte comando:


```bash
docker inspect coodesh_database
```

Procure pela propriedade IPAddress e copie o valor. Agora, após ter feito o login, acesse "Database Access", "Add Ip Address" e cole o ip do container.
## Documentação da API
Caso queria olhar a documentação a partir do Swagger, basta rodar o servidor e, em seu navegador, acessar a url http://localhost:3030/api.

#### Retorna uma simples mensagem 

```http
  GET /
```

#### Retorna um artigo

```http
  GET /articles/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`        | `number`   | **Obrigatório** ID do artigo desejado |


#### Retorna até 6 artigos encontrados
```http
  GET /articles
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `limit`     | `number`   | **Opcional** Limite de artigos retornados |

#### Cria um novo artigo
```http
  POST /articles
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `featured`  | `boolean`  | **Opcional**    |
| `title`     | `string`   | **Obrigatório** |
| `url`       | `string`   | **Obrigatório** |
| `imageUrl`  | `string`   | **Obrigatório** |
| `newsSite`  | `string`   | **Obrigatório** |
| `summary`   | `string`   | **Obrigatório** |
| `publishedAt` | `string` | **Obrigatório** |
| `launches`  | `array`    | **Obrigatório** |
| `events`    | `array`    | **Obrigatório** |

#### Deleta um artigo
```http
  DELETE /articles/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`        | `number`   | **Obrigatório** ID do artigo desejado |

#### Atualiza um artigo
```http
  PUT /articles/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`        | `number`   | **Obrigatório** ID do artigo desejado |
| `featured`  | `boolean`  | **Opcional** |
| `title`     | `string`   | **Opcional** |
| `url`       | `string`   | **Opcional** |
| `imageUrl`  | `string`   | **Opcional** |
| `newsSite`  | `string`   | **Opcional** |
| `summary`   | `string`   | **Opcional** |
| `publishedAt` | `string` | **Opcional** |
| `launches`  | `array`    | **Opcional** |
| `events`    | `array`    | **Opcional** |
