import { TagsRepository } from "@/repositories/TagsRepositories.ts"


class TagService {

    async CreateTag(name: string) {
        if (!name) {
            throw new Error("Name incorrect")
        }
        const tagsAlreadyExists = await TagsRepository.TagsAlreadyExists(name)

        if (tagsAlreadyExists) {
            throw new Error("Tag already exists")
        }
        const tag = await TagsRepository.TagCreate(name)
        return tag
    }
}

export { TagService }