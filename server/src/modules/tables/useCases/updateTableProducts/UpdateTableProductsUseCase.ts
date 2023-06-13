import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class UpdateTableProductsUseCase {
  async execute(
    tableId: string,
    status: string,
    coffe1: number,
    coffe2: number,
    coffe3: number,
    coffe4: number,
    coffe5: number,
    coffe6: number,
    coffe7: number,
    capuccino1: number,
    capuccino2: number,
    frapuccino1: number,
    frapuccino2: number
  ): Promise<void> {
    const table = await prisma.table.findUnique({ where: { id: tableId } });
    if (!table) {
      throw new AppError("Table not found.", 404);
    }

    await prisma.table.update({
      where: { id: tableId },
      data: {
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
      },
    });
  }
}
