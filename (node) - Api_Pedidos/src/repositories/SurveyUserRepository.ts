import { AppDataSource } from "../database/index.ts";
import { SurveyUserModel } from "../models/SurveyUser.ts";

export const SurveyUserRepository = AppDataSource.getRepository(
  SurveyUserModel
).extend({
  // Aqui você pode colocar métodos personalizados
  //   async findByEmail(email: string) {
  //     return this.findOne({ where: { email } });
  //   },
});
