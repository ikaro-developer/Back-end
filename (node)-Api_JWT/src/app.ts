import express from "express";
import cors, { type CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();

app.use(express.json());
//app.use(cors(corsOptions));
export {  app };