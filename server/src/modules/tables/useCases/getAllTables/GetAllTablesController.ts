import { Request, Response } from "express";
import { GetAllTablesUseCase } from "./GetAllTablesUseCase";

export class GetAllTablesController {
  async handle(req: Request, res: Response) {
    const getAllTablesUseCase = new GetAllTablesUseCase();
    const tables = await getAllTablesUseCase.execute();
    return res.json(tables);
  }
}
