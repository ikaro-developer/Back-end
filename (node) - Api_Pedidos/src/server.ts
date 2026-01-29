import app from "./app.js";
import setupSwagger from "./docs/swagger.js";

const PORT = 3333;

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger at http://localhost:${PORT}/api-docs`);
});
