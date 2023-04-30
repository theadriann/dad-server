-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "hwids" TEXT NOT NULL,
    "build_version" TEXT NOT NULL,
    "is_banned" INTEGER NOT NULL,
    "secret" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Character" (
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

-- CreateTable
CREATE TABLE "Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_id" TEXT NOT NULL,
    "item_count" INTEGER NOT NULL DEFAULT 0,
    "item_contents_count" INTEGER NOT NULL DEFAULT 0,
    "item_ammo_count" INTEGER NOT NULL DEFAULT 0,
    "properties" TEXT NOT NULL,
    "secondary_properties" TEXT NOT NULL DEFAULT '',
    "inventory_id" INTEGER NOT NULL,
    "slot_id" INTEGER NOT NULL,
    "character_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Inventory_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
