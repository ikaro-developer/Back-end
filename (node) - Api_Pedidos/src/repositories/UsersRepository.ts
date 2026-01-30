// repositories/UserRepository.ts
import { AppDataSource } from "../database/index.js";
import { Repository } from "typeorm";
import { User } from "../models/UserModel.js";

export const UsersRepository = AppDataSource.getRepository(User).extend({
  // Aqui você pode colocar métodos personalizados
  async findByEmail(email: string) {
    return this.findOne({ where: { email } });
  },
});
