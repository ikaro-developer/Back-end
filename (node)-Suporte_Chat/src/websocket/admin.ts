import { io } from "../app.ts";
import { ConnectionServices } from "../services/ConnectionServices.ts";
import { MessageServices } from "../services/MessageServices.ts";

io.on("connect", async (socket) => {
  const conectionsService = new ConnectionServices();
  const messageServices = new MessageServices();

  const allConectionsWithoutAdmin =
    await conectionsService.findallWithoutAdmin();

  io.emit("admin_list_all_users", allConectionsWithoutAdmin);

  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;

    const allmessages = await messageServices.listByUser(user_id);

    callback(allmessages);
  });

  socket.on("admin_send_message", async (params) => {
    const { user_id, text } = params;

    await messageServices.create({
      text,
      user_id,
      admin_id: socket.id,
    });

    const connection = await conectionsService.findByUserId(user_id);
    if (!connection) {
      console.error("Connection not found");
      return;
    }
    io.to(connection.socket_id).emit("admin_send_to_client", {
      text,
      socket_id: socket.id,
    });
  });

  socket.on("admin_user_in_support", async (params) => {
    const { user_id } = params;
    const connection = await conectionsService.updateAdminId(
      user_id,
      socket.id
    );

    const allConectionsWithoutAdmin =
      await conectionsService.findallWithoutAdmin;

    io.emit("admin_list_all_users", allConectionsWithoutAdmin);
  });
});
