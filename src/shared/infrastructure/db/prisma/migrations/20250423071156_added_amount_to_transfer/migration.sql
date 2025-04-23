/*
  Warnings:

  - Added the required column `amount` to the `CreditTransfer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CreditTransfer` ADD COLUMN `amount` DOUBLE NOT NULL;
