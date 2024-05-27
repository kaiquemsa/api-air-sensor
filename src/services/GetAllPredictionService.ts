import { AppDataSource } from "../database/data-source";
import Predictions from "../entities/Predictions";

export class GetAllPredictionService {
  async execute(): Promise<Predictions[]> {
    const repository = AppDataSource.getRepository(Predictions);

    const Prediction = await repository.find();

    return Prediction;
  }
}