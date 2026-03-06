import type { Request, Response } from "express";
import { UsersServices } from "../services/UsersServices.ts";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const usersServices = new UsersServices();

    const user = await usersServices.create({ email });

    return response.json(user);
  }
}

export { UsersController };
