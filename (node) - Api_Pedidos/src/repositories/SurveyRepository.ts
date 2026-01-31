// repositories/UserRepository.ts
import { AppDataSource } from "../database/index.js";
import { SurveyModel } from "../models/SurveyModel.js";

export const SurveyRepository = AppDataSource.getRepository(SurveyModel).extend(
  {
    // Aqui você pode colocar métodos personalizados
    //   async findByEmail(email: string) {
    //     return this.findOne({ where: { email } });
    //   },
  }
);
