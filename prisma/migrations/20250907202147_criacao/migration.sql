/*
  Warnings:

  - You are about to drop the `Adr` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Adr";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "adr" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "templateId" INTEGER NOT NULL,
    CONSTRAINT "adr_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "template" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "fieldId" INTEGER NOT NULL,
    CONSTRAINT "template_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "field" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "field" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "campos" JSONB NOT NULL,
    "ruleId" INTEGER NOT NULL,
    CONSTRAINT "field_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "rule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "regras" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ADR_categorias" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ADR_categorias_A_fkey" FOREIGN KEY ("A") REFERENCES "adr" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ADR_categorias_B_fkey" FOREIGN KEY ("B") REFERENCES "categoria" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "template_fieldId_key" ON "template"("fieldId");

-- CreateIndex
CREATE UNIQUE INDEX "field_ruleId_key" ON "field"("ruleId");

-- CreateIndex
CREATE UNIQUE INDEX "_ADR_categorias_AB_unique" ON "_ADR_categorias"("A", "B");

-- CreateIndex
CREATE INDEX "_ADR_categorias_B_index" ON "_ADR_categorias"("B");
