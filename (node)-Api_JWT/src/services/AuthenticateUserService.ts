import { UsersRepository } from "@/repositories/UsersRepositories.ts"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

interface PropsAuthenticateUserService{
    email: string,
    password:string
}


class AuthenticateUserService{

    async execute({email,password}:PropsAuthenticateUserService) {
        const user = await UsersRepository.UsersAlreadyExists(email)
        
        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)
        
        if (!passwordMatch) {
              throw new Error("Email/Password incorrect")
        }

        const token = jwt.sign({
            email: user.email,
           
        }, '793274d1919a3bb6f1e273e138da6235', {
            subject: user.id,
            expiresIn:"1d"
        })

        return token
    }


}

export {AuthenticateUserService}