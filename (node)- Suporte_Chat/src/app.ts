import express from "express";
import routes from "./routes/index.ts";
import cors, { type CorsOptions } from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

import { createServer } from "http";
import { Server, Socket } from "socket.io";

// Corrige __dirname no ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
  return res.render("html/client.html");
});

app.get("/pages/admin", (req, res) => {
  return res.render("html/admin.html");
});

const http = createServer(app);
const io = new Server(http);
io.on("connection", (socket: Socket) => {
  // console.log("Novo cliente conectado:", socket.id);
});

app.use(express.json());
app.use(routes);

export { http, app, io };
