import { Router } from "express";
import UserRouter from "./user.routes.ts";
import SurveyRouter from "./survey.routes.ts";
const router = Router();

router.use(UserRouter);
router.use(SurveyRouter);
export default router;
