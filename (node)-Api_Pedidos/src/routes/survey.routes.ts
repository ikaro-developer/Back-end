import { Router } from "express";
import { SurveyController } from "../controllers/SurveyController.ts";
const router = Router();

const surveyController = new SurveyController();
router.post("/survey", surveyController.create);
router.get("/survey", surveyController.show);
export default router;
