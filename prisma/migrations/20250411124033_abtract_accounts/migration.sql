/*
  Warnings:

  - You are about to drop the `CreditAccounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CreditTransactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CreditTransfer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CreditTransactions` DROP FOREIGN KEY `CreditTransactions_creditAccountId_fkey`;

-- DropForeignKey
ALTER TABLE `CreditTransfer` DROP FOREIGN KEY `CreditTransfer_fromCreditTransactionId_fkey`;

-- DropForeignKey
ALTER TABLE `CreditTransfer` DROP FOREIGN KEY `CreditTransfer_toCreditTransactionId_fkey`;

-- DropTable
DROP TABLE `CreditAccounts`;

-- DropTable
DROP TABLE `CreditTransactions`;

-- DropTable
DROP TABLE `CreditTransfer`;

-- CreateTable
CREATE TABLE `CreditAccount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creditCode` VARCHAR(191) NOT NULL,
    `type` ENUM('GIFT_CARD', 'PREPAID_CARD') NOT NULL,
    `originalCredits` INTEGER NOT NULL,
    `originalMoney` DOUBLE NOT NULL,
    `availableCredits` INTEGER NOT NULL,
    `availableMoney` DOUBLE NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL,
    `dateExpired` DATETIME(3) NOT NULL,
    `treatmentCount` INTEGER NULL,
    `discountPercentage` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CreditAccount_creditCode_key`(`creditCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
