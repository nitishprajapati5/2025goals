/*
  Warnings:

  - Added the required column `userId` to the `JournalLeafs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `JournalLeafs` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `JournalLeafs` ADD CONSTRAINT `JournalLeafs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Registration`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
