import { CreateComplimentsService } from "@/services/CreateComplimentsService.ts";
import type { Request, Response } from "express";

class CreateComplimentsController {

    async handle(request: Request, response: Response) {
        const { user_receiver, tag_id, message, } = request.body
        
        const {user_id} = request

        const createComplimentsService = new CreateComplimentsService()

        const compliment = await createComplimentsService.execute({
            user_sender:user_id,
            user_receiver,
            tag_id,
            message,
        })

        return response.json(compliment)
    }

}

export { CreateComplimentsController }