import type { Request, Response } from "express";
import { MessageServices } from "../services/MessageServices.ts";

class MessageController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;
    const messageServices = new MessageServices();

    const message = await messageServices.create({ admin_id, text, user_id });

    return response.json(message);
  }

  async showByUser(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;

    const messageServices = new MessageServices();

    const list = await messageServices.listByUser(id);

    return response.json(list);
  }
}

export { MessageController };
