/*
  Warnings:

  - You are about to alter the column `originalCredits` on the `CreditAccount` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `availableCredits` on the `CreditAccount` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `CreditAccount` MODIFY `originalCredits` DOUBLE NOT NULL,
    MODIFY `availableCredits` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `CreditTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creditAccountId` INTEGER NOT NULL,
    `type` ENUM('PURCHASE', 'USAGE', 'NULLIFICATION', 'TRANSFER_IN', 'TRANSFER_OUT', 'REFUND') NOT NULL,
    `credits` DOUBLE NOT NULL,
    `money` DOUBLE NOT NULL,
    `note` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CreditTransaction` ADD CONSTRAINT `CreditTransaction_creditAccountId_fkey` FOREIGN KEY (`creditAccountId`) REFERENCES `CreditAccount`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
