import { CreateComplimentsController } from "@/controllers/CreateComplimentsController.ts";
import { EnsureAuthenticated } from "@/middleware/ensureAuthenticated.ts";
import { Router } from "express";


const router = Router()

const complimentController = new CreateComplimentsController()
router.post('/compliments',EnsureAuthenticated, complimentController.handle)

export default router