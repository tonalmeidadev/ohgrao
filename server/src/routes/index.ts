import { Router } from "express";
import { tableRoutes } from "./table.route";

const routes = Router();

routes.use("/tables", tableRoutes);

export { routes };
