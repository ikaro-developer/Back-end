# 📦 API Node.js com TypeScript, TypeORM, SQLite, MVC, Swagger e Socket.IO

Este projeto é uma **API REST** desenvolvida em **Node.js** utilizando **TypeScript**, **Express**, **TypeORM**, **SQLite**, arquitetura **MVC**, documentação com **Swagger** e comunicação em tempo real com **Socket.IO**.

---

## 🎯 Objetivo do Projeto

- Criar usuários.
- Gerenciar configurações de chat.
- Enviar e listar mensagens.
- Implementar comunicação em tempo real entre clientes e administradores.
- Documentar a API com Swagger.
- Utilizar banco de dados SQLite para persistência.

---

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **TypeORM**
- **SQLite**
- **Swagger (OpenAPI)**
- **Socket.IO**
- **TSX**

---

## 📁 Estrutura de Pastas

```
(node)- Suporte_Chat/
├── .gitignore
├── package.json
├── tsconfig.json
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── html/
│   │   ├── admin.html
│   │   └── client.html
│   ├── images/
│   │   ├── chat.png
│   │   ├── close.png
│   │   └── send.png
│   └── js/
│       ├── admin.js
│       └── chat.js
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── controllers/
│   │   ├── MessageController.ts
│   │   ├── SettingsController.ts
│   │   └── UsersController.ts
│   ├── database/
│   │   ├── database.sqlite
│   │   ├── index.ts
│   │   └── migrations/
│   │       ├── 1771294666970-CreateSettings.ts
│   │       ├── 1771298240240-CreateUsers.ts
│   │       ├── 1771382901641-CreateMessages.ts
│   │       └── 1771431559881-CreateConnections.ts
│   ├── docs/
│   │   ├── openapi.yaml
│   │   └── swagger.ts
│   ├── models/
│   │   ├── ConnectionModel.ts
│   │   ├── MessageModel.ts
│   │   ├── SettingsModel.ts
│   │   └── UsersModel.ts
│   ├── repositories/
│   │   ├── ConnectionRepository.ts
│   │   ├── MessageRepository.ts
│   │   ├── SettingsRepository.ts
│   │   └── UsersRepository.ts
│   ├── routes/
│   │   ├── index.ts
│   │   ├── message.routes.ts
│   │   ├── settins.routes.ts
│   │   └── users.routes.ts
│   ├── services/
│   │   ├── ConnectionServices.ts
│   │   ├── MessageServices.ts
│   │   ├── SettingsServices.ts
│   │   └── UsersServices.ts
│   └── websocket/
│       ├── admin.ts
│       └── client.ts
```

---

## 🗄 Banco de Dados

O projeto utiliza **SQLite** para persistência de dados.

### Tabelas

1. **users**

   - `id` (uuid, primary key)
   - `email` (varchar)
   - `created_at` (timestamp)

2. **settings**

   - `id` (uuid, primary key)
   - `username` (varchar)
   - `chat` (boolean)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

3. **messages**

   - `id` (uuid, primary key)
   - `admin_id` (uuid, nullable)
   - `text` (varchar)
   - `user_id` (uuid, foreign key -> users.id)
   - `created_at` (timestamp)

4. **connections**
   - `id` (uuid, primary key)
   - `admin_id` (uuid, nullable)
   - `socket_id` (varchar)
   - `user_id` (uuid, foreign key -> users.id)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

---

## 🚏 Rotas da API

### Configurações

#### POST `/settings`

**Descrição:** Cria uma nova configuração.

**Body:**

```json
{
  "username": "carlos",
  "chat": true
}
```

**Respostas:**

- `201`: Configuração criada com sucesso.
- `400`: Dados inválidos.
- `409`: Usuário já possui configuração.

#### GET `/settings/:username`

**Descrição:** Busca configuração pelo username.

**Respostas:**

- `200`: Configuração encontrada.
- `400`: Username não informado.
- `404`: Configuração não encontrada.

#### PUT `/settings/:username`

**Descrição:** Atualiza configuração pelo username.

**Body:**

```json
{
  "chat": false
}
```

**Respostas:**

- `200`: Configuração atualizada com sucesso.
- `400`: Dados inválidos.
- `404`: Configuração não encontrada.

---

### Usuários

#### POST `/users`

**Descrição:** Cria um novo usuário.

**Body:**

```json
{
  "email": "carlos@email.com"
}
```

**Respostas:**

- `201`: Usuário criado com sucesso.
- `400`: Dados inválidos.
- `409`: Usuário já existe.

---

### Mensagens

#### POST `/message`

**Descrição:** Cria uma nova mensagem.

**Body:**

```json
{
  "text": "Olá, preciso de ajuda",
  "user_id": "550e8400-e29b-41d4-a716-446655440000",
  "admin_id": null
}
```

**Respostas:**

- `201`: Mensagem criada com sucesso.
- `400`: Dados inválidos.
- `500`: Erro interno do servidor.

#### GET `/message/:id`

**Descrição:** Lista mensagens por usuário.

**Parâmetros:**

- `id`: ID do usuário (UUID).

**Respostas:**

- `200`: Lista de mensagens do usuário.
- `400`: ID inválido.
- `500`: Erro interno do servidor.

---

## 📄 Swagger (Documentação)

A documentação da API está disponível em:

[http://localhost:3333/api-docs](http://localhost:3333/api-docs)

Ela é gerada a partir do arquivo:

- openapi.yaml

---

## 📜 Scripts Disponíveis

| Script                   | Descrição                                  |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Executa o servidor em modo desenvolvimento |
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

3️⃣ Executar migrations:

```bash
npm run typeorm:run
```

4️⃣ Acessar a documentação:

[http://localhost:3333/api-docs](http://localhost:3333/api-docs)

---

## ✅ Conclusão

Este projeto é uma aplicação de chat em tempo real com suporte a múltiplos usuários e administradores. Ele utiliza tecnologias modernas para fornecer uma base sólida para desenvolvimento de aplicações de comunicação. Ideal para estudos e projetos de suporte ao cliente. 🚀
