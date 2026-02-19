import { io } from "../app.ts";
import { ConnectionRepository } from "../repositories/ConnectionRepository.ts";
import { ConnectionServices } from "../services/ConnectionServices.ts";
import { MessageServices } from "../services/MessageServices.ts";
import { UsersServices } from "../services/UsersServices.ts";

interface IParams {
  text: string;
  email: string;
}
io.on("connection", (socket) => {
  const connectionService = new ConnectionServices();
  const usersService = new UsersServices();
  const messageService = new MessageServices();

  let user_id = null;

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;

    const userExists = await usersService.findByEmail({
      email,
    });
    if (!userExists) {
      const user = await usersService.create({
        email,
      });

      await connectionService.create({
        socket_id,
        user_id: user.id,
      });
      user_id = user.id;
    } else {
      user_id = userExists.id;
      const connection = await connectionService.findByUserId(userExists.id);

      if (!connection) {
        await connectionService.create({
          socket_id,
          user_id: userExists.id,
        });
      } else {
        connection.socket_id = socket_id;
        await ConnectionRepository.save(connection);
      }
    }

    await messageService.create({
      text,
      user_id,
    });

    const allMessages = await messageService.listByUser(user_id);

    socket.emit("client_list_all_messages", allMessages);
    const allUsers = await connectionService.findallWithoutAdmin();
    io.emit("admin_list_all_users", allUsers);
  });

  socket.on("client_send_to_admin", async (params) => {
    const { text, socket_admin_id } = params;

    const socket_id = socket.id;
    const connection = await connectionService.findBySockedId(socket_id);
    if (!connection) {
      console.error("Connection not found");
      return;
    }
    const message = await messageService.create({
      text,
      user_id: connection.user_id,
    });

    io.to(socket_admin_id).emit("admin_receive_message", {
      message,
      socket_id,
    });
  });
});
