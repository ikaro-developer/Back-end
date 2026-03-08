import { UsersRepository } from "@/repositories/UsersRepositories.ts"

interface PropsCreateUser{
    name: string,
    email: string,
    admin:boolean
    }

class CreateUserService{
    async execute({ name, email, admin }: PropsCreateUser) {
        

        if (!email) {
            throw new Error("Emai incorrect")
        }
        const usersAlreadyExists = await UsersRepository.UsersAlreadyExists(email)

        if (usersAlreadyExists) {
            throw new Error("User already exists")

        }

        const user = await UsersRepository.UserCreate(
            name,
            email,
            admin
        )

        return user


    }
}

export {CreateUserService}