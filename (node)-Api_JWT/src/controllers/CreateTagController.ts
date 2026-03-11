import { TagService } from "@/services/CreateTagServices.ts"
import type { Request, Response } from "express"


class TagController {

    async handle(request: Request, response: Response) {
        const { name } = request.body

        const tagService = new TagService()
        const tag = await tagService.CreateTag(name)

        return response.json(tag)
    }


}

export { TagController }

