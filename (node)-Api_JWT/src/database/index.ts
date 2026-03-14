import { DataSource } from "typeorm"
import path from "node:path";
import UsersModel from "@/models/UsersModel.ts";
import TagsModel from "@/models/TagsModel.ts";
import { ComplimentsModel } from "@/models/ComplimentsModel.ts";


const rootDir = process.cwd();
const dbDir = path.resolve(rootDir, "src/database");

export const AppDataSource = new DataSource({

    type: "sqlite",
    database: path.resolve(dbDir, "database.sqlite"),
    entities: [UsersModel, TagsModel, ComplimentsModel],
    migrations: [path.resolve(rootDir, "src/database/migrations/*.{ts,js}")],
    // logging: true,
    synchronize: true,


})

//  npm run typeorm:create -- src/database/migrations/