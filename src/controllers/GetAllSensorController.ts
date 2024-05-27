import { Request, Response } from "express";
import { GetAllSensor } from "../services/GetAllSensor";

export default class GetAllSensorController {
  async handle(_: Request, response: Response) {
    const service = new GetAllSensor();

    const categories = await service.execute();

    return response.json(categories);
  }
}