-- CreateTable
CREATE TABLE "tables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "command" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coffe1" TEXT NOT NULL,
    "coffe2" TEXT NOT NULL,
    "coffe3" TEXT NOT NULL,
    "coffe4" TEXT NOT NULL,
    "coffe5" TEXT NOT NULL,
    "coffe6" TEXT NOT NULL,
    "coffe7" TEXT NOT NULL,
    "capuccino1" TEXT NOT NULL,
    "capuccino2" TEXT NOT NULL,
    "frapuccino1" TEXT NOT NULL,
    "frapuccino2" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tables_command_key" ON "tables"("command");
