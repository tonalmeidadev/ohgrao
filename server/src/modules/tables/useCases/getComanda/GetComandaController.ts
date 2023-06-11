import { Request, Response } from "express";
import { GetComandaUseCase } from "./GetComandaUseCase";

export class GetComandaController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const getComandaUseCase = new GetComandaUseCase();
    const table = await getComandaUseCase.execute(id);

    return res.json(table);
  }
}
