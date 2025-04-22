-- DropForeignKey
ALTER TABLE `CreditTransaction` DROP FOREIGN KEY `CreditTransaction_creditAccountId_fkey`;

-- CreateTable
CREATE TABLE `CreditTransfer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fromTransactionId` INTEGER NOT NULL,
    `toTransactionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CreditTransaction` ADD CONSTRAINT `CreditTransaction_creditAccountId_fkey` FOREIGN KEY (`creditAccountId`) REFERENCES `CreditAccount`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreditTransfer` ADD CONSTRAINT `CreditTransfer_fromTransactionId_fkey` FOREIGN KEY (`fromTransactionId`) REFERENCES `CreditTransaction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreditTransfer` ADD CONSTRAINT `CreditTransfer_toTransactionId_fkey` FOREIGN KEY (`toTransactionId`) REFERENCES `CreditTransaction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
