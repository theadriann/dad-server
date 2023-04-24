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
    "nickname" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "gender" INTEGER NOT NULL,
    "last_login" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Character_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_id" INTEGER NOT NULL,
    "item_count" INTEGER NOT NULL,
    "slot_id" INTEGER NOT NULL,
    "properties" TEXT NOT NULL,
    "inventory_id" INTEGER NOT NULL,
    "character_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Inventory_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
