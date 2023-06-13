import { Request, Response } from "express";
import { UpdateTableProductsUseCase } from "./UpdateTableProductsUseCase";

export class UpdateTableProductsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const {
      status,
      coffe1,
      coffe2,
      coffe3,
      coffe4,
      coffe5,
      coffe6,
      coffe7,
      capuccino1,
      capuccino2,
      frapuccino1,
      frapuccino2,
    } = req.body;

    const updateTableProductsUseCase = new UpdateTableProductsUseCase();
    await updateTableProductsUseCase.execute(
      id,
      status,
      coffe1,
      coffe2,
      coffe3,
      coffe4,
      coffe5,
      coffe6,
      coffe7,
      capuccino1,
      capuccino2,
      frapuccino1,
      frapuccino2
    );

    return res.status(204).send();
  }
}
