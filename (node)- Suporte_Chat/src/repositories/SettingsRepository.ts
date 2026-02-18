import { AppDataSource } from "../database/index.ts";
import { SettingsModel } from "../models/SettingsModel.ts";

export const SettingsRepository = AppDataSource.getRepository(
  SettingsModel
).extend({
  async SettingsAlreadyExists(username: string) {
    return this.findOne({ where: { username } });
  },
});
