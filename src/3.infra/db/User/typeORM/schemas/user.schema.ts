import { EntitySchema } from "typeorm";
import { User, UserProps } from "../../../../../1.domain/User/user.entity";
import { baseSchema } from "./base.schema";

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  id: number;
  created_at?: Date;
  deleted_at?: Date;
  updated_at?: Date;
}

export const UserSchema = new EntitySchema<UserInterface>({
  name: "user",
  type: "regular",
  schema: "public",
  columns: {
    ...baseSchema,
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
});

export function UserSchemaConverter(input: UserInterface | null): User;
export function UserSchemaConverter(input: UserInterface[]): User[];

export function UserSchemaConverter(
  input: UserInterface[] | UserInterface | null
): User | User[] | null {
  if (!input) return null;

  if (Array.isArray(input)) {
    return input.map(
      (item) =>
        new User({
          user: {
            ...item,
          },
          emailAlreadyExists: false,
        })
    );
  }

  return new User({
    user: {
      ...input,
    },
    emailAlreadyExists: false,
  });
}
