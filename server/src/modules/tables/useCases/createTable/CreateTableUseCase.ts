import { Table } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateTableDTO } from "../../dtos/CreateTableDTO";

export class CreateTableUseCase {
  async execute({
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
  }: CreateTableDTO): Promise<Table> {
    const table = await prisma.table.create({
      data: {
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
      },
    });

    return table;
  }
}
