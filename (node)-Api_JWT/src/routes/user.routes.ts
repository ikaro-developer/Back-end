import { UserController } from "@/controllers/UserController.ts";
import { Router } from "express";

const router = Router()

const userController = new UserController()

router.post('/users', userController.handle)

export default router