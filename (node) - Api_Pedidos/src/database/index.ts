import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { User } from "../models/UserModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "database.sqlite"),

  entities: [User],

  migrations: [path.join(__dirname, "./migrations/*.{ts,js}")],

  synchronize: false,
  logging:true
});
// npm run typeorm:create -- src/database/migrations/Testeeefdsfsd
