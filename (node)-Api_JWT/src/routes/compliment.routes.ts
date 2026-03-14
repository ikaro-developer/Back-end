import { CreateComplimentsController } from "@/controllers/CreateComplimentsController.ts";
import { ListUserReceiveComplimentsController } from "@/controllers/ListUserReceiveComplimentsController.ts";
import { ListUserSendComplimentsController } from "@/controllers/ListUserSendComplimentsController.ts";
import { EnsureAuthenticated } from "@/middleware/ensureAuthenticated.ts";
import { Router } from "express";


const router = Router()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()

const complimentController = new CreateComplimentsController()
router.post('/compliments',EnsureAuthenticated, complimentController.handle)

router.get('/user/compliments/send', EnsureAuthenticated,listUserSendComplimentsController.handle)
router.get('/user/compliments/receive',EnsureAuthenticated,listUserReceiveComplimentsController.handle)

export default router