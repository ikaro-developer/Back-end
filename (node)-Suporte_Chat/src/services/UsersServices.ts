import type { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository.ts";

interface UsersServicesProps {
  email: string;
}

class UsersServices {
  async create({ email }: UsersServicesProps) {
    const userAlreadyExists = await UsersRepository.UsersAlreadyExists(email);

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const settings = UsersRepository.create({
      email,
    });

    await UsersRepository.save(settings);

    return settings;
  }

  async findByEmail({ email }: UsersServicesProps) {
    const userAlreadyExists = await UsersRepository.UsersAlreadyExists(email);
    return userAlreadyExists;
  }
}

export { UsersServices };
