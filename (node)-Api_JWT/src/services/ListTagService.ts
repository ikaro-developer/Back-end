import { TagsRepository } from "@/repositories/TagsRepositories.ts"

class ListTagService{
    async execute() {

    const tags = await TagsRepository.find()

    return tags
    }

}

export {ListTagService}