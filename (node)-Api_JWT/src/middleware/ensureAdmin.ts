import { UsersRepository } from "@/repositories/UsersRepositories.ts"
import type { Request, Response, NextFunction } from "express"

export async function  EnsureAdmin(request: Request, response: Response, next: NextFunction) {
   
    const { user_id } = request


    const user = await UsersRepository.findOne({
         where: { id: user_id }
    })


  if (!user) {
    return response.status(404).json({
      message: "User not found"
    })
  }
    if (user.admin) {
        return next()
    }
    return response.status(403).json({
        message: "Access denied. Admins only."
    })

}