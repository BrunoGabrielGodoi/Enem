import { Route } from "../../../../1.domain/Route/route.entity";
import { RouteRepositoryInterface } from "../../../../1.domain/Route/route.repository";

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: Route[] = [];
  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}
