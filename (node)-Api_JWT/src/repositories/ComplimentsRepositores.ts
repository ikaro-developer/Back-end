import { AppDataSource } from "@/database/index.ts";
import { ComplimentsModel } from "@/models/ComplimentsModel.ts";


export const ComplimentsRepository = AppDataSource.getRepository(ComplimentsModel).extend({
    

        async receiverExist(user_receiver: string) {
        return this.findOne({
            where: { user_receiver }
        });
    },

        async createCompliment(data: {
        user_sender: string;
        user_receiver: string;
        tag_id: string;
        message: string;
    }) {

        const compliment = this.create(data);

        return await this.save(compliment);
    }
})