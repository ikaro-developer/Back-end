import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import UserRouter from "../routes/user.routes.ts";
import { AppDataSource } from "../database/index.js";
import app from "../app.ts";

// const app = express();
// app.use(bodyParser.json());
// app.use(UserRouter);

beforeAll(async () => {
  await AppDataSource.initialize();
  await AppDataSource.synchronize(true); // recria o DB
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe("Users", () => {
  // request(app).post("/user")
  // .send({ name: "Test User", email: "test@example.com" });

  it("deve criar um usuário novo", async () => {
    const response = await request(app)
      .post("/user")
      .send({ name: "Test User", email: "test@example.com" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test User");
  });

  // it("não deve criar usuário com email duplicado", async () => {
  //   await request(app)
  //     .post("/user")
  //     .send({ name: "Test User 2", email: "duplicate@example.com" });

  //   const response = await request(app)
  //     .post("/user")
  //     .send({ name: "Test User 3", email: "duplicate@example.com" });

  //   expect(response.status).toBe(400);
  //   expect(response.body).toHaveProperty("error", "User Already exists!");
  // });
});
// // src/__tests__/survey.controller.test.ts
// import request from 'supertest';
// import express from 'express';
// import bodyParser from 'body-parser';
// import surveyRouter from '../routes/survey.routes';
// import { AppDataSource } from '../database/index';

// const app = express();
// app.use(bodyParser.json());
// app.use(surveyRouter);

// beforeAll(async () => {
//   await AppDataSource.initialize();
//   await AppDataSource.synchronize(true);
// });

// afterAll(async () => {
//   await AppDataSource.destroy();
// });

// describe('SurveyController', () => {
//   it('deve criar uma pesquisa', async () => {
//     const response = await request(app)
//       .post('/survey')
//       .send({ title: 'Pesquisa 1', description: 'Descrição teste' });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty('id');
//     expect(response.body.title).toBe('Pesquisa 1');
//   });

//   it('deve retornar todas as pesquisas', async () => {
//     const response = await request(app).get('/survey');
//     expect(response.status).toBe(200);
//     expect(Array.isArray(response.body)).toBe(true);
//   });
// });
