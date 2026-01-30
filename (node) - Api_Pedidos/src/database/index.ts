import 'reflect-metadata'
import { DataSource, type DataSourceOptions } from 'typeorm'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import ormConfigJson from '../config/ormconfig.json' with { type: 'json' }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ormConfig = ormConfigJson as unknown as DataSourceOptions


export const AppDataSource = new DataSource({
...ormConfig,
  migrations: [path.join(__dirname, './migrations/*.{ts,js}')],

})



