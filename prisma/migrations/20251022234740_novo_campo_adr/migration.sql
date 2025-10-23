-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_adr" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "templateId" INTEGER NOT NULL,
    "substituido" BOOLEAN NOT NULL DEFAULT false,
    "substituidoPor" INTEGER,
    "valido" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "adr_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_adr" ("id", "nome", "substituido", "substituidoPor", "templateId") SELECT "id", "nome", "substituido", "substituidoPor", "templateId" FROM "adr";
DROP TABLE "adr";
ALTER TABLE "new_adr" RENAME TO "adr";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
