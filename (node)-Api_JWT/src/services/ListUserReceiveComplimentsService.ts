import { ComplimentsRepository } from "@/repositories/ComplimentsRepositores.ts"

class ListUserReceiveComplimentsService{
    async execute(user_id: string) {
        
        const compliments = await ComplimentsRepository.find({
            where: {
                userReceiver: {
      id: user_id
    },
            },
            relations:['userSender',"userReceiver","tag"]
        })
        
        return compliments
    }

}

export {ListUserReceiveComplimentsService}