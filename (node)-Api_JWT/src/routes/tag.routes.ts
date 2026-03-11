import { TagController } from "@/controllers/CreateTagController.ts";
import { EnsureAdmin } from "@/middleware/ensureAdmin.ts";
import { Router } from "express";

const router = Router()

const tagController = new TagController()
router.post('/tags', EnsureAdmin ,tagController.handle)

export default router