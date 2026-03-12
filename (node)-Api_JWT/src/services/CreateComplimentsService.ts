import { ComplimentsRepository } from "@/repositories/ComplimentsRepositores.ts";

interface  PropsCreateComplimentsService {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

class CreateComplimentsService{

    async execute({ user_sender, user_receiver, tag_id, message }: PropsCreateComplimentsService){
       
       
        if (user_sender === user_receiver) {
            throw new Error("Incorrect user Receiver")
           
       }
        const userReceiverExists = await ComplimentsRepository.receiverExist(user_receiver)

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists")
        }

        const compliment = ComplimentsRepository.createCompliment({
            tag_id,
            user_receiver,
            user_sender,
            message
        })


        return compliment


    }
}

export {CreateComplimentsService}