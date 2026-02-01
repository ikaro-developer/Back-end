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

    return response.json(user);
  }

  // async getAll(req: Request, res: Response) {
  //   const usersRepository = AppDataSource.getRepository(User);
  //   const users = await usersRepository.find();
  //   return res.json(users);
  // }

  // async getById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const usersRepository = AppDataSource.getRepository(User);
  //   const user = await usersRepository.findOneBy({ id });
  //   if (!user) return res.status(404).json({ message: "User not found" });
  //   return res.json(user);
  // }

  // async deleteById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const usersRepository = AppDataSource.getRepository(User);
  //   const result = await usersRepository.delete(id);
  //   if (result.affected === 0) return res.status(404).json({ message: "User not found" });
  //   return res.status(204).send();
  // }
}

export { UserController };
