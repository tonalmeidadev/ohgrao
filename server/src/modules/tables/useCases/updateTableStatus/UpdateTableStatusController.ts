import { Request, Response } from "express";
import { UpdateTableStatusUseCase } from "./UpdateTableStatusUseCase";

export class UpdateTableStatusController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    const updateTableStatusUseCase = new UpdateTableStatusUseCase();
    await updateTableStatusUseCase.execute(id, status);

    return res.status(204).send();
  }
}
