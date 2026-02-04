import type { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository.ts";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const userAlreadyExists = await UsersRepository.findByEmail(email);

    if (userAlreadyExists) {
      return response.status(400).json({ error: "User Already exists!" });
    }

    const user = UsersRepository.create({
      name,
      email,
    });

    await UsersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UserController };
