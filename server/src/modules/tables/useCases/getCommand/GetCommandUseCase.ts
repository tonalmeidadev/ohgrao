import { Table } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetCommandUseCase {
  async execute(tableId: string): Promise<Table | null> {
    const table = await prisma.table.findUnique({ where: { id: tableId } });
    return table;
  }
}
