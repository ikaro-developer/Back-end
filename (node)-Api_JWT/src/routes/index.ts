import { Router } from "express";
import UserRouter from './user.routes.ts'


const routes = Router()

routes.use(UserRouter)

export default routes