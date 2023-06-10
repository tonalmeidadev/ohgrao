import { Request, Response } from "express";
import { CreateTableUseCase } from "./CreateTableUseCase";

export class CreateTableController {
  async handle(req: Request, res: Response) {
    const {
      command,
      isActive,
      status,
      name,
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

    const createTableUseCase = new CreateTableUseCase();
    const result = await createTableUseCase.execute({
      command,
      isActive,
      status,
      name,
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
    });

    return res.status(201).json(result);
  }
}
