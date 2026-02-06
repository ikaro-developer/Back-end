import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "node:path";
import fs from "node:fs";
import { UserModel } from "../models/UserModel.ts";
import { SurveyModel } from "../models/SurveyModel.ts";
import { SurveyUserModel } from "../models/SurveyUserModel.ts";

const rootDir = process.cwd();
const isTest = process.env.NODE_ENV === "test";

const dbDir = path.resolve(rootDir, "src/database");

if (!isTest && !fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

export const AppDataSource = new DataSource({
  type: "sqlite",

  database: isTest
    ? path.resolve(dbDir, "database.test.sqlite")
    : path.resolve(dbDir, "database.sqlite"),

  entities: [UserModel, SurveyModel, SurveyUserModel],

  migrations: isTest
    ? []
    : [path.resolve(rootDir, "src/database/migrations/*.{ts,js}")],

  synchronize: isTest,
  logging: true,
});
//  npm run typeorm:create -- src/database/migrations/teste2
