import { Router } from "express";
import { CreateTableController } from "../modules/tables/useCases/createTable/CreateTableController";

const createTableController = new CreateTableController();

const tablesRoutes = Router();

tablesRoutes.post("/", createTableController.handle);

export { tablesRoutes };
