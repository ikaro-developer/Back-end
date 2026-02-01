import { AppDataSource } from "../database/index.ts";
import { SurveyModel } from "../models/SurveyModel.ts";

export const SurveyRepository = AppDataSource.getRepository(SurveyModel).extend(
  {
    // Aqui você pode colocar métodos personalizados
    //   async findByEmail(email: string) {
    //     return this.findOne({ where: { email } });
    //   },
  }
);
