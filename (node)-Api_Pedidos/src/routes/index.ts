import { Router } from "express";
import UserRouter from "./user.routes.ts";
import SurveyRouter from "./survey.routes.ts";
import SendMailRouter from "./sendMail.routes.ts";
import AnswerRouter from './answer.routes.ts'
import NpsRouter from './nps.routes.ts'
const router = Router();

router.use(UserRouter);
router.use(SurveyRouter);
router.use(SendMailRouter);
router.use(AnswerRouter)
router.use(NpsRouter)
export default router;
