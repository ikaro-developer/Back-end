import type { Request, Response } from "express";
import { SettingsRepository } from "../repositories/SettingsRepository.ts";
import { SettingsModel } from "../models/SettingsModel.ts";

interface SettingsServicesProps {
  chat: boolean;
  username: string;
}

class SettingsServices {
  async create({ chat, username }: SettingsServicesProps) {
    const userAlreadyExists = await SettingsRepository.SettingsAlreadyExists(
      username
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    const settings = SettingsRepository.create({
      chat,
      username,
    });

    await SettingsRepository.save(settings);

    return settings;
  }

  async findByUsername(username: string) {
    const settings = await SettingsRepository.SettingsAlreadyExists(username);
    return settings;
  }

  async update(username: string, chat: boolean) {
    await SettingsRepository.createQueryBuilder()
      .update(SettingsModel)
      .set({ chat })
      .where("username = :username", { username })
      .execute();
  }
}

export { SettingsServices };
