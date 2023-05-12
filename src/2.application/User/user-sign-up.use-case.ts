import { User } from "../../1.domain/User/user.entity";
import { UserRepositoryInterface } from "../../1.domain/User/user.repository";

export class UserSignUpUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(
    input: UserSignUpUseCaseInput
  ): Promise<UserSignUpUseCaseOutput> {
    const userFound = await this.userRepository.findByEmail(input.email);
    let a = "sdasd";
    const user = new User({
      user: input,
      emailAlreadyExists: userFound != null,
    });
    await this.userRepository.insert(user);
    return user.toJSON();
  }
}

type UserSignUpUseCaseInput = {
  name: string;
  email: string;
  password: string;
};

type UserSignUpUseCaseOutput = {
  name: string;
  email: string;
  password: string;
  id: number;
};
