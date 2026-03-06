import { DataSource } from "typeorm"
import path from "node:path";


const rootDir = process.cwd();
const dbDir = path.resolve(rootDir, "src/database");

export const AppDataSource = new DataSource({

    type: "sqlite",
    database: path.resolve(dbDir, "database.sqlite"),
    // entities: [
    //     "./src/entities/**/*.ts"
    // ],
    migrations: [path.resolve(rootDir, "src/database/migrations/*.{ts,js}")],
    logging: true,
    synchronize: true,


})

//  npm run typeorm:create -- src/database/migrations/teste2