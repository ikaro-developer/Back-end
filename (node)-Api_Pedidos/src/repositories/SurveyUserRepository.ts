import { IsNull, Not } from "typeorm";
import { AppDataSource } from "../database/index.ts";
import { SurveyUserModel } from "../models/SurveyUserModel.ts";

export const SurveyUserRepository = AppDataSource.getRepository(
  SurveyUserModel
).extend({
  async findByMail(id: string) {
    return this.findOne({
      where: [{ id, value: IsNull() }],
      relations: ["user", "survey"],
    });
  },

  async findBySurvey(survey_id: string) {
    return this.find({
      where: { survey_id, value:Not(IsNull())  },
    });
  },
});
