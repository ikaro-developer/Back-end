import { Router } from "express";
import UserRouter from './user.routes.ts'
import TagRouter from './tag.routes.ts'
import ComplimentRotuer from './compliment.routes.ts'


const routes = Router()

routes.use(UserRouter)
routes.use(TagRouter)
routes.use(ComplimentRotuer)


export default routes