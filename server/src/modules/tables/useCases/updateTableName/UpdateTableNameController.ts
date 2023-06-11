import { Request, Response } from "express";
import { UpdateTableNameUseCase } from "./UpdateTableNameUseCase";

export class UpdateTableNameController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const updateTableNameUseCase = new UpdateTableNameUseCase();
    await updateTableNameUseCase.execute(id, name);

    return res.status(204).send();
  }
}
