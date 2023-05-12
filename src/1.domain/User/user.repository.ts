import { User } from "./user.entity";

export interface UserRepositoryInterface {
  insert(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
}
