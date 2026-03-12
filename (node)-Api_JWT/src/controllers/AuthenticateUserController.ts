import { AuthenticateUserService } from "@/services/AuthenticateUserService.ts";
import type { Request, Response } from "express";

class AuthenticateUserController{

    async handle(request: Request, response: Response) {
        const { email, password } = request.body
        
        const authenticateUserService = new AuthenticateUserService()
        const token = await authenticateUserService.execute({
            email,
            password
        })

        response.json(token)
    }

}
export {AuthenticateUserController}