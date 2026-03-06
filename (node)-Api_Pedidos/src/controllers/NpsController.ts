import type { Request, Response } from "express";
import { SurveyUserRepository } from "../repositories/SurveyUserRepository.ts";


class NpsController {

    async execute(request: Request, response: Response) {
        const { survey_id } = request.params as { survey_id: string };

        const surveyUsers = await SurveyUserRepository.findBySurvey(survey_id)

        const detractor = surveyUsers.filter(
            (survey) => survey.value != null && survey.value >= 0 && survey.value <= 6
        ).length;

        const promoters = surveyUsers.filter(
            (survey) => survey.value != null && survey.value >= 9 && survey.value <= 10
        ).length;

        const passive = surveyUsers.filter(
            (survey) => survey.value != null && survey.value >= 7 && survey.value <= 8
        ).length;

        const totalAnswer = surveyUsers.length;

        const calculate = totalAnswer > 0 ?( ((promoters - detractor) / totalAnswer) * 100).toFixed(2) : 0;

        return response.json({
            detractor,
            promoters,
            passive,
            totalAnswer,
            calculate

        })



    }

}

export { NpsController }