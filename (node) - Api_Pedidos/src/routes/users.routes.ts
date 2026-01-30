import { Router, type Response, type Request } from "express";
import { UserController } from "../controllers/UserController.js";
const router = Router();


//USERCONTROLLER
const userController = new UserController()
router.post("/users",  userController.create);
// router.get("/users", userController.getAll.bind(userController));
// router.get("/users/:id", userController.getById.bind(userController));
// router.delete("/users/:id", userController.deleteById.bind(userController));
export default router;
