import { IsNull } from "typeorm";
import { AppDataSource } from "../database/index.ts";
import { SurveyUserModel } from "../models/SurveyUserModel.ts";

export const SurveyUserRepository = AppDataSource.getRepository(
  SurveyUserModel
).extend({
  async findByMail(id: string) {
    return this.findOne({
      where: [{ user_id: id }, { value: IsNull() }],
      relations: ["user", "survey"],
    });
  },
});
