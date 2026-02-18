import type { Request, Response } from "express";
import { SettingsServices } from "../services/SettingsServices.ts";
class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsServices = new SettingsServices();

    try {
      const settings = await settingsServices.create({
        chat,
        username,
      });

      return response.status(201).json(settings);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { SettingsController };
