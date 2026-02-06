import { Router } from "express";
import { SendMailController } from "../controllers/SendMailcontroller.ts";
const router = Router();

const sendMailController = new SendMailController();
router.post("/sendMail", sendMailController.execute);

export default router;
