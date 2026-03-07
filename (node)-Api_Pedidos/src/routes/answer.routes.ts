import { Router } from "express";
import { AnswerController } from "../controllers/AnswerController.ts";
const router = Router();

const answerController = new AnswerController();
router.get("/answers/:value", answerController.execute);

export default router;
