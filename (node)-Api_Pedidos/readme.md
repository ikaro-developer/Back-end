# 📦 API Node.js com TypeScript, TypeORM, SQLite, MVC, Swagger e Jest

Este projeto é uma **API REST** desenvolvida em **Node.js** utilizando **TypeScript**, **Express**, **TypeORM**, **SQLite**, arquitetura **MVC**, documentação com **Swagger** e **testes automatizados** com **Jest** e **Supertest**.

---

## 🎯 Objetivo do Projeto

- Criar usuários
- Criar e listar pesquisas (Surveys)
- Enviar e-mails com pesquisas para usuários
- Registrar respostas de pesquisas
- Calcular o NPS (Net Promoter Score)
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
- **Nodemailer**
- **Handlebars**

---

## 📁 Estrutura de Pastas

```
(node) - Api_Pedidos/
├── .env
├── .gitignore
├── jest.config.cjs
├── package.json
├── readme.md
├── tsconfig.json
├── tsconfig.jest.json
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── __tests__/
│   │   ├── Survey.test.ts
│   │   └── User.test.ts
│   ├── controllers/
│   │   ├── AnswerController.ts
│   │   ├── NpsController.ts
│   │   ├── SendMailcontroller.ts
│   │   ├── SurveyController.ts
│   │   └── UserController.ts
│   ├── database/
│   │   ├── database.sqlite
│   │   ├── index.ts
│   │   └── migrations/
│   │       ├── 1769822987806-CreateSurveys.ts
│   │       ├── 1769736499325-CreateUsers.ts
│   │       └── 1770178265569-CreateSurveyUsers.ts
│   ├── docs/
│   │   ├── openapi.yaml
│   │   └── swagger.ts
│   ├── models/
│   │   ├── SurveyModel.ts
│   │   ├── SurveyUserModel.ts
│   │   └── UserModel.ts
│   ├── repositories/
│   │   ├── SurveyRepository.ts
│   │   ├── SurveyUserRepository.ts
│   │   └── UsersRepository.ts
│   ├── routes/
│   │   ├── answer.routes.ts
│   │   ├── index.ts
│   │   ├── nps.routes.ts
│   │   ├── sendMail.routes.ts
│   │   ├── survey.routes.ts
│   │   └── user.routes.ts
│   ├── services/
│   │   └── SendMailServices.ts
│   └── views/
│       └── emails/
│           └── npsMail.hbs
```

---

## 🗄 Banco de Dados

O projeto utiliza **SQLite** com separação por ambiente.

### Desenvolvimento

- Banco de dados: `src/database/database.sqlite`

### Testes

- Banco de dados: `src/database/database.test.sqlite`

A escolha do banco é feita automaticamente através da variável de ambiente:

```ts
const isTest = process.env.NODE_ENV === "test";

database: isTest
  ? path.resolve(dbDir, "database.test.sqlite")
  : path.resolve(dbDir, "database.sqlite"),
```

### Entidades e Relacionamentos

#### Tabelas

1. **users**

   - `id` (uuid, primary key)
   - `name` (varchar)
   - `email` (varchar)
   - `created_at` (timestamp)

2. **surveys**

   - `id` (uuid, primary key)
   - `title` (varchar)
   - `description` (varchar)
   - `created_at` (timestamp)

3. **surveys_users**
   - `id` (uuid, primary key)
   - `user_id` (uuid, foreign key -> users.id)
   - `survey_id` (uuid, foreign key -> surveys.id)
   - `value` (integer, nullable)
   - `created_at` (timestamp)

#### Relacionamentos

- **users** (1) ↔️ (N) **surveys_users**
- **surveys** (1) ↔️ (N) **surveys_users**

---

## 🚏 Rotas da API

### 👤 Usuários

#### POST `/user`

**Descrição:** Cria um novo usuário.

**Body:**

```json
{
  "name": "João",
  "email": "joao@gmail.com"
}
```

**Respostas:**

- `201`: Usuário criado com sucesso.
- `400`: Usuário já existe.

---

### 📊 Surveys

#### POST `/survey`

**Descrição:** Cria uma nova pesquisa.

**Body:**

```json
{
  "title": "Pesquisa de Satisfação",
  "description": "Avaliação dos clientes"
}
```

**Respostas:**

- `201`: Pesquisa criada com sucesso.
- `400`: Dados inválidos.

#### GET `/survey`

**Descrição:** Retorna todas as pesquisas cadastradas.

**Respostas:**

- `200`: Lista de pesquisas.

---

### 📧 Envio de E-mails

#### POST `/sendMail`

**Descrição:** Envia um e-mail de pesquisa para o usuário.

**Body:**

```json
{
  "email": "joao@gmail.com",
  "survey_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Respostas:**

- `200`: E-mail enviado com sucesso.
- `400`: Usuário ou pesquisa não encontrado.

---

### 📊 Respostas

#### GET `/answers/:value`

**Descrição:** Registra a resposta de um usuário para uma pesquisa.

**Query Params:**

- `u`: ID do usuário da pesquisa.

**Respostas:**

- `200`: Resposta registrada com sucesso.
- `400`: Survey User não encontrado ou resposta inválida.

---

### 📈 NPS

#### GET `/nps/:survey_id`

**Descrição:** Calcula o NPS de uma pesquisa.

**Respostas:**

- `200`: NPS calculado com sucesso.
- `400`: Survey não encontrado ou sem respostas.

---

## 📄 Swagger (Documentação)

A documentação da API está disponível em:

[http://localhost:3333/api-docs](http://localhost:3333/api-docs)

Ela é gerada a partir do arquivo:

- [src/docs/openapi.yaml](src/docs/openapi.yaml)

---

## 🧪 Testes Automatizados

- Testes de integração com **Jest** e **Supertest**.
- Banco de dados isolado para testes.
- Testes não afetam o banco de desenvolvimento.

### Rodar os testes:

```bash
npm test
```

Após os testes, o banco de testes é removido automaticamente com:

```json
"posttest": "rimraf ./src/database/database.test.sqlite"
```

---

## 📜 Scripts Disponíveis

| Script                   | Descrição                                  |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Executa o servidor em modo desenvolvimento |
| `npm test`               | Executa os testes                          |
| `npm run build`          | Compila o projeto                          |
| `npm start`              | Executa o build                            |
| `npm run typeorm:create` | Cria uma migration                         |
| `npm run typeorm:run`    | Executa migrations                         |
| `npm run typeorm:revert` | Reverte migrations                         |

---

## ▶️ Como Executar o Projeto

1️⃣ Instalar dependências:

```bash
npm install
```

2️⃣ Rodar em desenvolvimento:

```bash
npm run dev
```

3️⃣ Rodar testes:

```bash
npm test
```

4️⃣ Build e produção:

```bash
npm run build
npm start
```

---

## ⚠️ Observações Importantes

- `NODE_ENV=test` ativa o banco de testes.
- `cross-env` garante compatibilidade entre Windows e Linux.
- `rimraf` remove arquivos de forma multiplataforma.
- `synchronize: true` é usado apenas em testes.

---

## ✅ Conclusão

Este projeto fornece uma base sólida para APIs modernas em Node.js, com:

- Código organizado.
- Arquitetura limpa.
- Testes confiáveis.
- Documentação clara.
- Separação correta de ambientes.

Ideal para estudos, portfólio ou evolução para projetos maiores 🚀
