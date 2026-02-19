import { Router } from "express";
import { SettingsController } from "../controllers/SettingsController.ts";

const router = Router();
const settingsController = new SettingsController();
router.post("/settings", settingsController.create);
router.get("/settings/:username", settingsController.findByUsername);
router.put("/settings/:username", settingsController.update);

router
export default router;
