import { Request, Response } from "express";
import { AuthLoginUserService } from "../services/AuthLoginService";

export default class AuthLoginUserController {
    async handle(request: Request, response: Response) {
      const { username, password } = request.body;
  
      const service = new AuthLoginUserService();
  
      try {
        const user = await service.execute({ username, password });
        return response.json(user);
      } catch (error) {
        return response.status(400).json({ error: error.message });
      }
    }
}