import express from "express";
import routes from "./routes/index.ts";
import cors, { type CorsOptions } from "cors";

const app = express();

const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"], // front-end permitido
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
// app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

export default app;
