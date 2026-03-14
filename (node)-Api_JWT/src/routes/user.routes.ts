import { AuthenticateUserController } from "@/controllers/AuthenticateUserController.ts";
import { UserController } from "@/controllers/CreateUserController.ts";
import { Router } from "express";

const router = Router()

const userController = new UserController()
const authenticateUserController = new AuthenticateUserController()


router.post('/users', userController.handle)

router.post('/login', authenticateUserController.handle)



export default router