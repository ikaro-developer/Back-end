import { AppDataSource } from "@/database/index.ts";
import TagsModel from "@/models/TagsModel.ts";

export const TagsRepository = AppDataSource.getRepository(TagsModel).extend({
    async TagsAlreadyExists(name: string) {
        return this.findOne({ where: { name } });
    },

    async TagCreate(name: string) {
        const user = this.create({
            name
        })
        return this.save(user)
    }

})