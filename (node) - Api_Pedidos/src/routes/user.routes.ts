import { Router } from "express";
import { UserController } from "../controllers/UserController.ts";
const router = Router();

//USERCONTROLLER
const userController = new UserController();
router.post("/user", userController.create);
// router.get("/users", userController.getAll.bind(userController));
// router.get("/users/:id", userController.getById.bind(userController));
// router.delete("/users/:id", userController.deleteById.bind(userController));
export default router;
