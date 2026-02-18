import { Router } from "express";
import { SettingsController } from "../controllers/SettingsController.ts";

const router = Router();
const settingsController = new SettingsController();
router.post("/settings", settingsController.create);
export default router;
