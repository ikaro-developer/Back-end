import { AppDataSource } from "../database/index.ts";
import { UserModel } from "../models/UserModel.ts";

export const UsersRepository = AppDataSource.getRepository(UserModel).extend({
  // Aqui você pode colocar métodos personalizados
  async findByEmail(email: string) {
    return this.findOne({ where: { email } });
  },
});
