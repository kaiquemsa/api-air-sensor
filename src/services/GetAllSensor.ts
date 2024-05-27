import Sensor from "../entities/Sensor";
import { AppDataSource } from "../database/data-source";

export class GetAllSensor {
  async execute(): Promise<Sensor[]> {
    const repository = AppDataSource.getRepository(Sensor);

    const SensorData = await repository.find();

    return SensorData;
  }
}