import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class UpdateTableNameUseCase {
  async execute(tableId: string, name: string): Promise<void> {
    const table = await prisma.table.findUnique({ where: { id: tableId } });
    if (!table) {
      throw new AppError("Table not found.", 404);
    }

    await prisma.table.update({ where: { id: tableId }, data: { name } });
  }
}
