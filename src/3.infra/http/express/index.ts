import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../../2.application/Route/create-route.use-case";
import { ListAllRoutesUseCase } from "../../../2.application/Route/list-all-routes.use-case";
import { RouteInMemoryRepository } from "../../db/Route/InMemory/route-in-memory.repository";
import { userRoutes } from "./User/index";

let app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.get("/routes", async (_req: Request, res: Response) => {
  const listAllUseCase = new ListAllRoutesUseCase(routeRepo);
  const output = await listAllUseCase.execute();
  res.json(output);
});

app.post("/routes", async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
});

userRoutes(app).then((x) => {
  app = x;
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
