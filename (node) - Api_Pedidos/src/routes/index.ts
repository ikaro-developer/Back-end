import { Router } from "express";
import UserRouter from "./user.routes.ts";
import SurveyRouter from "./survey.routes.ts";
import SendMailRouter from "./sendMail.routes.ts";
const router = Router();

router.use(UserRouter);
router.use(SurveyRouter);
router.use(SendMailRouter);

export default router;
