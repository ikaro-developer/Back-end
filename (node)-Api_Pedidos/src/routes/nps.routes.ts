import { Router } from "express";
import { NpsController } from "../controllers/NpsController.ts";
const router = Router();

const npsController = new NpsController();
router.get("/nps/:survey_id", npsController.execute);

export default router;
