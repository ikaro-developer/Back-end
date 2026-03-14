import { ComplimentsRepository } from "@/repositories/ComplimentsRepositores.ts"

class ListUserSendComplimentsService{
    async execute(user_id: string) {
        
        const compliments = await ComplimentsRepository.find({
            where: {
                userSender: {
      id: user_id
    }
            }
        })
        
        return compliments
    }

}

export {ListUserSendComplimentsService}