import express from "express";
import cors, { type CorsOptions } from "cors";
import routes from "./routes/index.ts";

const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(routes)
//app.use(cors(corsOptions));
export {  app };