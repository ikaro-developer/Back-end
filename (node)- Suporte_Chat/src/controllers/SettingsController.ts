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

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params as any;
    const settingsServices = new SettingsServices();

    if (!username) {
      return response.status(400).json({ error: "username não fornecido" });
    }

    const settings = await settingsServices.findByUsername(username);
    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params as any;
    const { chat } = request.body;

    const settingsServices = new SettingsServices();

    const settings = await settingsServices.update(username, chat);
    return response.json(settings);
  }
}

export { SettingsController };
