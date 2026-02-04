import request from 'supertest';
import { AppDataSource } from '../database/index.ts';
import app from "../app.ts";

describe('SurveyController', () => {
    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }
    });

    afterAll(async () => {
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
        }
    });
    it('deve criar uma pesquisa', async () => {
        const response = await request(app)
            .post('/survey')
            .send({ title: 'Pesquisa 1', description: 'Descrição teste' });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Pesquisa 1');
    });

    it('deve retornar todas as pesquisas', async () => {
        const response = await request(app).get('/survey');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
