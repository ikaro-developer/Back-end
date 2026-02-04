# 📦 API Node.js com TypeScript, TypeORM, SQLite, MVC, Swagger e Jest

Este projeto é uma **API REST** desenvolvida em **Node.js** utilizando **TypeScript**, **Express**, **TypeORM**, **SQLite**, arquitetura **MVC**, documentação com **Swagger** e **testes automatizados** com **Jest** e **Supertest**.

O projeto foi construído com foco em **boas práticas**, **organização**, **isolamento de ambientes** (desenvolvimento e teste) e **facilidade de manutenção**.

---

## 🎯 Objetivo do Projeto

- Criar usuários
- Criar e listar pesquisas (Surveys)
- Isolar banco de dados para testes
- Documentar a API com Swagger
- Garantir qualidade com testes automatizados
- Ser compatível com Windows, Linux e macOS

---

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **TypeORM**
- **SQLite**
- **Swagger (OpenAPI)**
- **Jest**
- **Supertest**
- **TSX**

---

## 📁 Estrutura de Pastas

src/
├── tests/ # Testes automatizados
│ └── User.test.ts
│
├── controllers/ # Controllers (regras de negócio)
│ ├── UserController.ts
│ └── SurveyController.ts
│
├── database/ # Configuração do banco de dados
│ ├── index.ts # DataSource do TypeORM
│ └── migrations/ # Migrations
│
├── docs/ # Documentação Swagger
│ ├── swagger.ts
│ └── openapi.yaml
│
├── models/ # Entidades (Models)
│ ├── UserModel.ts
│ └── SurveyModel.ts
│
├── repositories/ # Repositórios (acesso ao banco)
│ ├── UsersRepository.ts
│ └── SurveyRepository.ts
│
├── routes/ # Rotas
│ ├── index.ts
│ ├── user.routes.ts
│ └── survey.routes.ts
│
├── app.ts # Configuração do Express
└── server.ts # Inicialização do servidor


---

## 🗄 Banco de Dados

O projeto utiliza **SQLite** com separação por ambiente.

### Desenvolvimento

src/database/database.sqlite


### Testes

src/database/database.test.sqlite

A escolha do banco é feita automaticamente através da variável de ambiente:

```ts
const isTest = process.env.NODE_ENV === "test";

database: isTest
  ? path.resolve(dbDir, "database.test.sqlite")
  : path.resolve(dbDir, "database.sqlite"),



🔁 Arquitetura MVC

Fluxo da aplicação:

Request → Route → Controller → Repository → Database
Routes: definem os endpoints

Controllers: regras de negócio

Repositories: acesso ao banco

Models: entidades do banco

🚏 Rotas da API
👤 Usuários

POST /user

Cria um novo usuário

{
  "name": "João",
  "email": "joao@gmail.com"
}
Respostas:

201 → Usuário criado

400 → Usuário já existe

📊 Surveys

POST /survey


{
  "title": "Pesquisa de Satisfação",
  "description": "Avaliação dos clientes"
}
GET /survey

Retorna todas as pesquisas cadastradas.

📄 Swagger (Documentação)

A documentação da API está disponível em:


http://localhost:3333/api-docs
Ela é gerada a partir do arquivo:

src/docs/openapi.yaml


🧪 Testes Automatizados

Testes de integração com Jest e Supertest

Banco de dados isolado para testes

Testes não afetam o banco de desenvolvimento

Rodar os testes:

npm test

Após os testes, o banco de testes é removido automaticamente com:
"posttest": "rimraf ./src/database/database.test.sqlite"

📜 Scripts Disponíveis

| Script                   | Descrição                                  |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Executa o servidor em modo desenvolvimento |
| `npm test`               | Executa os testes                          |
| `npm run build`          | Compila o projeto                          |
| `npm start`              | Executa o build                            |
| `npm run typeorm:create` | Cria uma migration                         |
| `npm run typeorm:run`    | Executa migrations                         |
| `npm run typeorm:revert` | Reverte migrations                         |


▶️ Como Executar o Projeto
1️⃣ Instalar dependências


npm install

2️⃣ Rodar em desenvolvimento

npm run dev

3️⃣ Rodar testes

npm test


4️⃣ Build e produção

npm run build
npm start

⚠️ Observações Importantes

NODE_ENV=test ativa o banco de testes

cross-env garante compatibilidade entre Windows e Linux

rimraf remove arquivos de forma multiplataforma

synchronize: true é usado apenas em testes

✅ Conclusão

Este projeto fornece uma base sólida para APIs modernas em Node.js, com:

Código organizado

Arquitetura limpa

Testes confiáveis

Documentação clara

Separação correta de ambientes

Ideal para estudos, portfólio ou evolução para projetos maiores 🚀
