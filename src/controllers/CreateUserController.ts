import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export default class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const service = new CreateUserService();

    try {
      const result = await service.execute({ username, password });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}