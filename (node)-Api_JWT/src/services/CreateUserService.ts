import { UsersRepository } from "@/repositories/UsersRepositories.ts"
import { hash } from "bcryptjs"

interface PropsCreateUser {
    name: string,
    email: string,
    admin: boolean,
    password: string
}

class UserService {
    async CreateUser({ name, email, admin=false, password }: PropsCreateUser) {
        if (!email) {
            throw new Error("Emai incorrect")
        }
        const usersAlreadyExists = await UsersRepository.UsersAlreadyExists(email)

        if (usersAlreadyExists) {
            throw new Error("User already exists")

        }
        const passwordHash: string = await hash(password, 8)

        const user = await UsersRepository.UserCreate(
            name,
            email,
            admin,
            passwordHash
        )

        return user


    }
}

export { UserService }