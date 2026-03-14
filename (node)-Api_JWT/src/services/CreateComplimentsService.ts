import { ComplimentsRepository } from "@/repositories/ComplimentsRepositores.ts";

import { UsersRepository } from "@/repositories/UsersRepositories.ts"
interface PropsCreateComplimentsService {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

class CreateComplimentsService {

    async execute({ user_sender, user_receiver, tag_id, message }: PropsCreateComplimentsService) {


        if (user_sender === user_receiver) {
            throw new Error("Incorrect user Receiver")

        }
        const userReceiverExists = await UsersRepository.findOne(
            { where: { id: user_receiver } }
        )

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists")
        }

        const compliment = ComplimentsRepository.createCompliment(
            user_sender,
            user_receiver,
            tag_id,
            message
        )


        return compliment


    }
}

export { CreateComplimentsService }


