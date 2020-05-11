import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}
class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    /** Creted of the user  respository */
    const usersReposiotory = getRepository(User);

    /** Created business  rules */
    const checkUserExists = await usersReposiotory.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address alredy used');
    }

    const user = usersReposiotory.create({
      name,
      email,
      password,
    });

    await usersReposiotory.save(user);

    return user;
  }
}

export default CreateUserService;
