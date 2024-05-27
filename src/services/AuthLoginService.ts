import { AppDataSource } from '../database/data-source';
import * as bcrypt from 'bcrypt';
import { iUser } from '../dtos/iUser';
import Users from '../entities/Users';

export class AuthLoginUserService {
  async execute({ username, password }: Pick<iUser, 'username' | 'password'>): Promise<Users> {
    const repository = AppDataSource.getRepository(Users);

    const user = await repository.findOne({ where: { username } });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}