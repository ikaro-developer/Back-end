import { AppDataSource } from "../database/index.ts";
import { ConnectionModel } from "../models/ConnectionModel.ts";

export const ConnectionRepository = AppDataSource.getRepository(
  ConnectionModel
).extend({

});
