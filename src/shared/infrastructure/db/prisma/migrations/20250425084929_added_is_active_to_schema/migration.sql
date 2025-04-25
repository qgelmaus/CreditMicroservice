-- AlterTable
ALTER TABLE `CreditAccount` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ALTER COLUMN `createdAt` DROP DEFAULT;
