/*
  Warnings:

  - You are about to drop the column `Name` on the `Registration` table. All the data in the column will be lost.
  - Added the required column `name` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Registration` DROP COLUMN `Name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
