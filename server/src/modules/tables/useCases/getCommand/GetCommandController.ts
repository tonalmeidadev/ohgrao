import { Request, Response } from "express";
import { GetCommandUseCase } from "./GetCommandUseCase";

export class GetCommandController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const getCommandUseCase = new GetCommandUseCase();
    const table = await getCommandUseCase.execute(id);

    return res.json(table);
  }
}
