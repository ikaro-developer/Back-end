import { Router } from "express";
import { MessageController } from "../controllers/MessageController.ts";

const router = Router();
const messageController = new MessageController();
router.post("/message", messageController.create);
router.get("/message/:id", messageController.showByUser);
export default router;
