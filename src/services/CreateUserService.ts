import Users from "../entities/Users";
import { AppDataSource } from "../database/data-source";
import * as bcrypt from 'bcrypt';
import { iUser } from "../dtos/iUser";

export class CreateUserService {
  async execute({ username, password }: iUser): Promise<Users> {
    const repository = AppDataSource.getRepository(Users);

    if (await repository.findOneBy({ username })) {
      throw new Error("username already exists");
    }

    const User = repository.create({ username, password });

    await repository.save(User);

    return User;
  }
}