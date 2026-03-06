import { app, http } from "./app.ts";
import "./websocket/client.ts";
import "./websocket/admin.ts";

import { AppDataSource } from "./database/index.ts";
import setupSwagger from "./docs/swagger.ts";

const PORT = 3333;
async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source initialized");
    setupSwagger(app);

    http.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      console.log(`Swagger at http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
  }
}

startServer();
