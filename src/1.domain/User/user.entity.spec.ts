import { User } from "./user.entity";

describe("User tests", () => {
  test("should_create a user_when_user props are valid", () => {
    const user = new User({
      user: {
        email: "user@example.com",
        password: "password",
        name: "User name",
      },
      emailAlreadyExists: false,
    });

    expect(user.props.email).toEqual("user@example.com");
    expect(user.props.password).toEqual("password");
    expect(user.props.name).toEqual("User name");
    expect(user.props.created_at).not.toBeUndefined();
  });

  test("should_throw error_when_user name is empy", () => {
    expect(
      () =>
        new User({
          user: {
            email: "user@example.com",
            password: "password",
            name: "   ",
          },
          emailAlreadyExists: false,
        })
    ).toThrowError();
  });

  test("should_throw error_when_user email is empy", () => {
    expect(
      () =>
        new User({
          user: {
            email: "   ",
            password: "password",
            name: "User name",
          },
          emailAlreadyExists: false,
        })
    ).toThrowError();
  });

  test("should_throw error_when_user email already exists", () => {
    expect(
      () =>
        new User({
          user: {
            email: "user@example.com",
            password: "password",
            name: "User name",
          },
          emailAlreadyExists: true,
        })
    ).toThrowError();
  });
});
