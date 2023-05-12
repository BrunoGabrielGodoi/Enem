import { DataSource, DeepPartial, Repository } from "typeorm";
import { User, UserProps } from "../../../../../1.domain/User/user.entity";
import { UserRepositoryInterface } from "../../../../../1.domain/User/user.repository";
import {
  UserInterface,
  UserSchema,
  UserSchemaConverter,
} from "../schemas/user.schema";

export class UserTypeORM implements UserRepositoryInterface {
  repository: Repository<UserInterface>;

  constructor(repository: Repository<UserInterface>) {
    this.repository = repository;
  }
  async insert(user: User): Promise<User> {
    let a = await this.repository.insert(user.props);

    return user;
  }
  async findAll(): Promise<User[]> {
    return UserSchemaConverter(await this.repository.find({}));
  }

  async find(user: Partial<UserProps>): Promise<User | null> {
    return UserSchemaConverter(
      await this.repository.findOne({
        where: {
          ...user,
        },
      })
    );
  }

  async findByEmail(userEmail: string): Promise<User | null> {
    return UserSchemaConverter(
      await this.repository.findOne({
        where: {
          email: userEmail,
        },
      })
    );
  }
}
