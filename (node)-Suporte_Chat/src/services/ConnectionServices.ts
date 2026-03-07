import type { Request, Response } from "express";
import { ConnectionRepository } from "../repositories/ConnectionRepository.ts";
import { IsNull } from "typeorm";
import { ConnectionModel } from "../models/ConnectionModel.ts";

interface ConnectionServicesProps {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionServices {
  async create({ socket_id, user_id, admin_id, id }: ConnectionServicesProps) {
    const connection = await ConnectionRepository.create({
      socket_id,
      user_id,
    });

    await ConnectionRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await ConnectionRepository.findOne({
      where: { user_id },
    });
    return connection;
  }

  async findallWithoutAdmin() {
    const connections = await ConnectionRepository.find({
      where: { admin_id: IsNull() },
      relations: ["user"],
    });
    return connections;
  }

  async findBySockedId(socket_id: string) {
    const connection = await ConnectionRepository.findOne({
      where: { socket_id },
    });

    return connection;
  }

  async updateAdminId(user_id: string, admin_id: string) {
    await ConnectionRepository.createQueryBuilder()
      .update(ConnectionModel)
      .set({ admin_id })
      .where("user_id = :user_id", { user_id })
      .execute();
  }
}

export { ConnectionServices };
