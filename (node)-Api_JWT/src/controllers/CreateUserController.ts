import { UserService } from "@/services/CreateUserService.ts";
import type { Request, Response } from "express";

class UserController{

    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body
        
        const userService = new UserService()
        const user = await userService.CreateUser({ name, email, admin, password })
        
        return response.json(user)
    }
}

export {UserController}