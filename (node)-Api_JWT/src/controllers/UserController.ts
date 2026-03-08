import { CreateUserService } from "@/services/CreateUserService.ts";
import type { Request, Response } from "express";

class UserController{

    async handle(request: Request, respose: Response) {
        const { name, email, admin } = request.body
        
        const createUserService = new CreateUserService()
        const user = createUserService.execute({ name, email, admin })
        
        return respose.json(user)
    }
}

export {UserController}