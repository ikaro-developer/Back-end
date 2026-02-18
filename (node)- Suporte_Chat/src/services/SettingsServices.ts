import type { Request, Response } from "express";
import { SettingsRepository } from "../repositories/SettingsRepository.ts";

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
}

export { SettingsServices };
