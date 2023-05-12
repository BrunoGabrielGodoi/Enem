import express, { Express, Request, Response } from "express";
import { User } from "../../../../1.domain/User/user.entity";
import { UserSignUpUseCase } from "../../../../2.application/User/user-sign-up.use-case";
import { UserInMemoryRepository } from "../../../db/User/inMemory/user-in-memory.repository";
import { dataSource } from "../../../db/User/typeORM";
import {
  UserInterface,
  UserSchema,
} from "../../../db/User/typeORM/schemas/user.schema";
import { UserTypeORM } from "../../../db/User/typeORM/repositorys/user-typeORM.repository";

export async function userRoutes(app: Express): Promise<Express> {
  const userRepository = new UserTypeORM(
    (await dataSource()).getRepository<UserInterface>(UserSchema)
  );

  app.post("/user", async (req: Request, res: Response) => {
    try {
      const createUseCase = new UserSignUpUseCase(userRepository);
      const output = await createUseCase.execute(req.body);
      // let a = await userRepository.findAll();
      res.status(201).json(output);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  });

  return app;
}
