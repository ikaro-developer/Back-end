import type { Request, Response } from "express";
import { SurveyUserRepository } from "../repositories/SurveyUserRepository.ts";

class AnswerController {

    async execute(request: Request, response: Response) {
        const { value } = request.params
        const { u } = request.query


        const surveyUser = await SurveyUserRepository.findByMail(String(u))

        if (!surveyUser) {
            return response.status(400).json({
                error: "Survey User does not Exists!"
            })
        }

        surveyUser.value = Number(value)

        await SurveyUserRepository.save(surveyUser)

        response.json(surveyUser)
    }
}

export { AnswerController }