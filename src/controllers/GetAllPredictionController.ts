import { Request, Response } from "express";
import { GetAllPredictionService } from "../services/GetAllPredictionService";

export default class GetAllPredictionController {
  async handle(_: Request, response: Response) {
    const service = new GetAllPredictionService();

    const categories = await service.execute();

    return response.json(categories);
  }
}