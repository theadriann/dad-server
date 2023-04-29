-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "hidden_nickname" TEXT NOT NULL DEFAULT '',
    "nickname" TEXT NOT NULL DEFAULT '',
    "class" TEXT NOT NULL DEFAULT '',
    "level" INTEGER NOT NULL,
    "gender" INTEGER NOT NULL,
    "perk1" TEXT NOT NULL DEFAULT '',
    "perk2" TEXT NOT NULL DEFAULT '',
    "perk3" TEXT NOT NULL DEFAULT '',
    "perk4" TEXT NOT NULL DEFAULT '',
    "spell1" TEXT NOT NULL DEFAULT '',
    "spell2" TEXT NOT NULL DEFAULT '',
    "last_login" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Character_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("class", "created_at", "gender", "id", "last_login", "level", "nickname", "perk1", "perk2", "perk3", "perk4", "spell1", "spell2", "updated_at", "user_id") SELECT "class", "created_at", "gender", "id", "last_login", "level", "nickname", "perk1", "perk2", "perk3", "perk4", "spell1", "spell2", "updated_at", "user_id" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
