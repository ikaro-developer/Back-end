import { Router } from "express";
import UserRouter from './user.routes.ts'
import TagRouter from './tag.routes.ts'


const routes = Router()

routes.use(UserRouter)
routes.use(TagRouter)

export default routes