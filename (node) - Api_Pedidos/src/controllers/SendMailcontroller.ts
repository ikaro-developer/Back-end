import type { Request, Response } from "express";
import { SurveyRepository } from "../repositories/SurveyRepository.ts";
import { UsersRepository } from "../repositories/UsersRepository.ts";
import { SurveyUserRepository } from "../repositories/SurveyUserRepository.ts";

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const userAlreadyExists = await UsersRepository.findByEmail(email);

    const surveyAlreadyExists = await SurveyRepository.findById(survey_id);

    if (!userAlreadyExists) {
      return response.status(400).json({
        error: "Usuario nao encontrado",
      });
    }
    if (!surveyAlreadyExists) {
      return response.status(400).json({
        error: "Survey nao encontrado",
      });
    }

    const surveyUser = SurveyUserRepository.create({
      user_id: userAlreadyExists.id,
      survey_id,
    });

    await SurveyUserRepository.save(surveyUser);

    return response.status(200).json(surveyUser);
  }
}

export { SendMailController };
