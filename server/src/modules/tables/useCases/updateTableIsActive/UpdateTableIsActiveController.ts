import { Request, Response } from "express";
import { UpdateTableIsActiveUseCase } from "./UpdateTableIsActiveUseCase";

export class UpdateTableIsActiveController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { isActive } = req.body;

    const updateTableStatusUseCase = new UpdateTableIsActiveUseCase();
    await updateTableStatusUseCase.execute(id, isActive);

    return res.status(204).send();
  }
}
