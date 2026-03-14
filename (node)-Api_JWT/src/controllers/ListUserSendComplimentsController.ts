import { ListUserSendComplimentsService } from "@/services/ListUserSendComplimentService.ts"
import type { Request, Response } from "express"

class ListUserSendComplimentsController{

    async handle(request:Request, response:Response) {
        const { user_id } = request
        
        const listUserSendComplimentsService = new ListUserSendComplimentsService()
        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }



}

export {ListUserSendComplimentsController}