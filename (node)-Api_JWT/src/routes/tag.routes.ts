import { TagController } from "@/controllers/CreateTagController.ts";
import { EnsureAdmin } from "@/middleware/ensureAdmin.ts";
import { EnsureAuthenticated } from "@/middleware/ensureAuthenticated.ts";
import { Router } from "express";

const router = Router()

const tagController = new TagController()
router.post('/tags', EnsureAuthenticated, EnsureAdmin ,tagController.handle)

export default router