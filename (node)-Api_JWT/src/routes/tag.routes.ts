import { TagController } from "@/controllers/CreateTagController.ts";
import { ListTagController } from "@/controllers/ListTagController.ts";
import { EnsureAdmin } from "@/middleware/ensureAdmin.ts";
import { EnsureAuthenticated } from "@/middleware/ensureAuthenticated.ts";
import { Router } from "express";

const router = Router()

const tagController = new TagController()
const listTagController = new ListTagController()

router.post('/tags', EnsureAuthenticated, EnsureAdmin ,tagController.handle)

router.get('/tags', EnsureAuthenticated,listTagController.handle)

export default router