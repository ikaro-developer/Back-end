import { AppDataSource } from "../database/index.ts";
import { User } from "../models/UserModel.ts";

export const UsersRepository = AppDataSource.getRepository(User).extend({
  // Aqui você pode colocar métodos personalizados
  async findByEmail(email: string) {
    return this.findOne({ where: { email } });
  },
});
