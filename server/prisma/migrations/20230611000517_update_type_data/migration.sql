/*
  Warnings:

  - You are about to alter the column `capuccino1` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `capuccino2` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `coffe1` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `coffe2` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `coffe3` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `coffe4` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `coffe5` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `coffe6` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `coffe7` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `command` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `frapuccino1` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `frapuccino2` on the `tables` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "command" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coffe1" INTEGER NOT NULL,
    "coffe2" INTEGER NOT NULL,
    "coffe3" INTEGER NOT NULL,
    "coffe4" INTEGER NOT NULL,
    "coffe5" INTEGER NOT NULL,
    "coffe6" INTEGER NOT NULL,
    "coffe7" INTEGER NOT NULL,
    "capuccino1" INTEGER NOT NULL,
    "capuccino2" INTEGER NOT NULL,
    "frapuccino1" INTEGER NOT NULL,
    "frapuccino2" INTEGER NOT NULL
);
INSERT INTO "new_tables" ("capuccino1", "capuccino2", "coffe1", "coffe2", "coffe3", "coffe4", "coffe5", "coffe6", "coffe7", "command", "frapuccino1", "frapuccino2", "id", "isActive", "name", "status") SELECT "capuccino1", "capuccino2", "coffe1", "coffe2", "coffe3", "coffe4", "coffe5", "coffe6", "coffe7", "command", "frapuccino1", "frapuccino2", "id", "isActive", "name", "status" FROM "tables";
DROP TABLE "tables";
ALTER TABLE "new_tables" RENAME TO "tables";
CREATE UNIQUE INDEX "tables_command_key" ON "tables"("command");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
