import type { Request, Response } from "express";
import { SurveyRepository } from "../repositories/SurveyRepository.ts";
import { UsersRepository } from "../repositories/UsersRepository.ts";
import { SurveyUserRepository } from "../repositories/SurveyUserRepository.ts";
import SendMailServices from "../services/SendMailServices.ts";

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

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
    const variables = {
      name: userAlreadyExists.name,
      survey: surveyAlreadyExists.title,
      description: surveyAlreadyExists.description,
      user_id: userAlreadyExists.id,
      Link: process.env.URL_MAIL,
    };

    const surveyUserAlreadyExists = await SurveyUserRepository.findByMail(
      userAlreadyExists.id
    );
    if (surveyUserAlreadyExists) {
      await SendMailServices.execute(
        email,
        surveyAlreadyExists.title,
        variables,
        npsPath
      );

      return response.status(200).json(surveyAlreadyExists);
    }

    const surveyUser = SurveyUserRepository.create({
      user_id: userAlreadyExists.id,
      survey_id: survey_id,
    });

    await SurveyUserRepository.save(surveyUser);

    await SendMailServices.execute(
      email,
      surveyAlreadyExists.title,
      variables,
      npsPath
    );

    return response.status(200).json(surveyUser);
  }
}

export { SendMailController };
