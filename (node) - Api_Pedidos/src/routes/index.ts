import { Router } from "express";
import UserRouter from "./users.routes.js";
const router = Router();



router.use(UserRouter);

export default router;
