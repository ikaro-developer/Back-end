import { Router } from "express";
import { SurveyController } from "../controllers/SurveyController.ts";
const router = Router();

const surveyController = new SurveyController();
router.post("/survey", surveyController.create);
router.get("/survey", surveyController.show);
// router.get("/users/:id", userController.getById.bind(userController));
// router.delete("/users/:id", userController.deleteById.bind(userController));
export default router;
