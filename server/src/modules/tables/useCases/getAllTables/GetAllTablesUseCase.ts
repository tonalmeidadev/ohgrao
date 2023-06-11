import { Table } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllTablesUseCase {
  async execute(): Promise<Table[]> {
    const tables = await prisma.table.findMany();
    return tables;
  }
}
