-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_adr" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "templateId" INTEGER NOT NULL,
    "substituido" BOOLEAN NOT NULL DEFAULT false,
    "substituidoPor" INTEGER,
    CONSTRAINT "adr_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_adr" ("id", "nome", "templateId") SELECT "id", "nome", "templateId" FROM "adr";
DROP TABLE "adr";
ALTER TABLE "new_adr" RENAME TO "adr";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
