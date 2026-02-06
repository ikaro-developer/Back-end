import { Router } from "express";
import { UserController } from "../controllers/UserController.ts";
const router = Router();

//USERCONTROLLER
const userController = new UserController();
router.post("/user", userController.create);
export default router;
