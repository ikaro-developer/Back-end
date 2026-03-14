import { ListTagService } from "@/services/ListTagService.ts"
import type { Request, Response } from "express"

class ListTagController{

    async handle(request:Request, response:Response) {

        const listTagService = new ListTagService()
        const tags = await listTagService.execute()
        console.log(tags)
        return response.json(tags)
        
    }


}
export {ListTagController}