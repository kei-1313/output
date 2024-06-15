-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "email" TEXT,
    "emailVerified" DATETIME,
    "hashedpassword" TEXT,
    "image" TEXT
);
INSERT INTO "new_User" ("email", "emailVerified", "hashedpassword", "id", "image", "name", "profile") SELECT "email", "emailVerified", "hashedpassword", "id", "image", "name", "profile" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
