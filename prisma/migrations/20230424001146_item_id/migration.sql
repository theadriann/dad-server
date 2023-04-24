-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_id" TEXT NOT NULL,
    "item_count" INTEGER NOT NULL,
    "slot_id" INTEGER NOT NULL,
    "properties" TEXT NOT NULL,
    "inventory_id" INTEGER NOT NULL,
    "character_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Inventory_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inventory" ("character_id", "created_at", "id", "inventory_id", "item_count", "item_id", "properties", "slot_id", "updated_at") SELECT "character_id", "created_at", "id", "inventory_id", "item_count", "item_id", "properties", "slot_id", "updated_at" FROM "Inventory";
DROP TABLE "Inventory";
ALTER TABLE "new_Inventory" RENAME TO "Inventory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
