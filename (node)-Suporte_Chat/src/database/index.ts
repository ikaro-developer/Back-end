import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "node:path";
import fs from "node:fs";
import { SettingsModel } from "../models/SettingsModel.ts";
import { UsersModel } from "../models/UsersModel.ts";
import { MessageModel } from "../models/MessageModel.ts";
import { ConnectionModel } from "../models/ConnectionModel.ts";

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

  entities: [SettingsModel, UsersModel, MessageModel, ConnectionModel],

  migrations: isTest
    ? []
    : [path.resolve(rootDir, "src/database/migrations/*.{ts,js}")],

  synchronize: isTest,
  logging: true,
});
//  npm run typeorm:create -- src/database/migrations/teste2
