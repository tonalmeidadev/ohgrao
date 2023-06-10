import { Router } from "express";
import { tablesRoutes } from "./table.route";

const routes = Router();

routes.use("/table", tablesRoutes);

export { routes };
