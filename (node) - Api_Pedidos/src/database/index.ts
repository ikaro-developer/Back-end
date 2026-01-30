import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "database.sqlite"),

  entities: [path.join(__dirname, "./entity/*.{ts,js}")],

  migrations: [path.join(__dirname, "./migrations/*.{ts,js}")],

  synchronize: false,
});
// npm run typeorm:create -- src/database/migrations/Testeeefdsfsd
