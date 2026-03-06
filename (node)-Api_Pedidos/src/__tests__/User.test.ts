import request from "supertest";
import { AppDataSource } from "../database/index.ts";
import app from "../app.ts";

describe("Users", () => {
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


  it("deve criar um usuário novo", async () => {
    const response = await request(app)
      .post("/user")
      .send({
        name: "Test User", email: "test@example.com"
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test User");
  });

  it("não deve criar usuário com email duplicado", async () => {
    await request(app)
      .post("/user")
      .send({ name: "Test User 2", email: "duplicate@example.com" });

    const response = await request(app)
      .post("/user")
      .send({ name: "Test User 3", email: "duplicate@example.com" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "User Already exists!");
  });
});

