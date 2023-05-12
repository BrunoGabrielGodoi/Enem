export type UserProps = {
  name: string;
  email: string;
  password: string;
  id?: number;
  created_at?: Date;
  deleted_at?: Date;
  updated_at?: Date;
};

export class User {
  private _props: UserProps;

  constructor({
    user,
    emailAlreadyExists,
  }: {
    user: UserProps;
    emailAlreadyExists: boolean;
  }) {
    if (!user.created_at) user.created_at = new Date();
    if (!user.name.trim()) throw new Error("User must have a name");
    if (!user.email.trim()) throw new Error("User must have an email");
    if (!user.password.trim()) throw new Error("User must have a password");
    if (emailAlreadyExists) throw new Error("Email already exists");
    this._props = user;
    return this;
  }

  public get props(): UserProps {
    return this._props;
  }
  private set props(user: UserProps) {
    this._props = user;
  }

  toJSON() {
    return {
      id: this.props.id ?? 0,
      ...this.props,
    };
  }
}
