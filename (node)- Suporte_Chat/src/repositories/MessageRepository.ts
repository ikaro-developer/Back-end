import { AppDataSource } from "../database/index.ts";
import { MessageModel } from "../models/MessageModel.ts";

export const MessageRepository = AppDataSource.getRepository(
  MessageModel
).extend({
  // async UsersAlreadyExists(email: string) {
  //   return this.findOne({ where: { email } });
  // },
});
