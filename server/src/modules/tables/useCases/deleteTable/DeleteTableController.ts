import { Request, Response } from "express";
import { DeleteTableUseCase } from "./DeleteTableUseCase";

export class DeleteTableController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteTableUseCase = new DeleteTableUseCase();
    await deleteTableUseCase.execute(id);

    return res.status(204).send();
  }
}
