import { User } from "../../../../1.domain/User/user.entity";
import { UserRepositoryInterface } from "../../../../1.domain/User/user.repository";

export class UserInMemoryRepository implements UserRepositoryInterface {
  private users: User[] = [];
  async insert(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
  async findAll(): Promise<User[]> {
    return this.users;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((x) => x.props.email == email);
    return user || null;
  }
}
