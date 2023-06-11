import { Router } from "express";
import { CreateTableController } from "../modules/tables/useCases/createTable/CreateTableController";
import { DeleteTableController } from "../modules/tables/useCases/deleteTable/DeleteTableController";
import { GetAllTablesController } from "../modules/tables/useCases/getAllTables/GetAllTablesController";
import { UpdateTableStatusController } from "../modules/tables/useCases/updateTableStatus/UpdateTableStatusController";
import { UpdateTableNameController } from "../modules/tables/useCases/updateTableName/UpdateTableNameController";
import { UpdateTableProductsController } from "../modules/tables/useCases/updateTableProducts/UpdateTableProductsController";
import { GetCommandController } from "../modules/tables/useCases/getCommand/GetCommandController";

const createTableController = new CreateTableController();
const getAllTablesController = new GetAllTablesController();
const deleteTableController = new DeleteTableController();
const updateTableStatusController = new UpdateTableStatusController();
const updateTableNameController = new UpdateTableNameController();
const updateTableProductsController = new UpdateTableProductsController();
const getCommandController = new GetCommandController();

const tableRoutes = Router();

tableRoutes.post("/", createTableController.handle); // Garçon cria uma mesa
tableRoutes.get("/", getAllTablesController.handle); // Lista todas as mesas
tableRoutes.delete("/:id", deleteTableController.handle); // Deleta mesa específica
tableRoutes.put("/:id/status", updateTableStatusController.handle); // Altera o status da mesa específica
tableRoutes.put("/:id/name", updateTableNameController.handle); // Altera o nome da pessoa que utilizará a mesa específica
tableRoutes.put("/:id/products", updateTableProductsController.handle); // Altera os produtos
tableRoutes.get("/:id/command", getCommandController.handle); // Busca por tabela específcia

export { tableRoutes };
