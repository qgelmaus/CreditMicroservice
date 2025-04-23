/*
  Warnings:

  - You are about to drop the column `dateCreated` on the `CreditAccount` table. All the data in the column will be lost.
  - You are about to drop the column `dateExpired` on the `CreditAccount` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `CreditAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CreditAccount` DROP COLUMN `dateCreated`,
    DROP COLUMN `dateExpired`,
    ADD COLUMN `expiresAt` DATETIME(3) NOT NULL,
    ALTER COLUMN `createdAt` DROP DEFAULT;
