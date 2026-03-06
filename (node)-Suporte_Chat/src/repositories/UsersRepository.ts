import { AppDataSource } from "../database/index.ts";
import { UsersModel } from "../models/UsersModel.ts";

export const UsersRepository = AppDataSource.getRepository(UsersModel).extend({
  async UsersAlreadyExists(email: string) {
    return this.findOne({ where: { email } });
  },
});
