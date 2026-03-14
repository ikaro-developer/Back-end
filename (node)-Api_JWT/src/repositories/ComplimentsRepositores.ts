import { AppDataSource } from "@/database/index.ts";
import { ComplimentsModel } from "@/models/ComplimentsModel.ts";


export const ComplimentsRepository = AppDataSource.getRepository(ComplimentsModel).extend({

    async createCompliment(
        user_sender: string,
        user_receiver: string,
        tag_id: string,
        message: string,
    ) {

        const compliment = this.create({
            userSender: { id: user_sender },
            userReceiver: { id: user_receiver },
            tag: { id: tag_id },
            message,
        });

        return await this.save(compliment);
    }
})