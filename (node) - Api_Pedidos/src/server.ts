import app from "./app.ts";
import { AppDataSource } from "./database/index.ts";
import setupSwagger from "./docs/swagger.ts";

const PORT = 3333;
async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source initialized");

    setupSwagger(app);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      console.log(`Swagger at http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
    process.exit(1); // encerra o servidor se falhar
  }
}

startServer();
