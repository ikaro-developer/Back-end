import { Router } from "express";
import SettingsRouter from "./settins.routes.ts";
import UsersRouter from "./users.routes.ts";
import MessageRouter from "./message.routes.ts";
const router = Router();

router.use(SettingsRouter);

router.use(UsersRouter);

router.use(MessageRouter);
export default router;
