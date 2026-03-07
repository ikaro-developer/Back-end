import type { Request, Response } from "express";
import { MessageRepository } from "../repositories/MessageRepository.ts";

interface MessageServicesProps {
  admin_id?: string | null;
  text: string;
  user_id: string;
}

class MessageServices {
  async create({ admin_id, text, user_id }: MessageServicesProps) {
    const message = MessageRepository.create({
      text,
      user_id,
    });

    await MessageRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    const list = await MessageRepository.find({
      where: { user_id },
      relations: ["user"],
    });

    return list;
  }
}

export { MessageServices };
