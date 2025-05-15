-- CreateTable
CREATE TABLE `CreditAccount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creditCode` VARCHAR(191) NOT NULL,
    `type` ENUM('GIFT_CARD', 'PREPAID_CARD') NOT NULL,
    `originalCredits` DOUBLE NOT NULL,
    `originalMoney` DOUBLE NOT NULL,
    `availableCredits` DOUBLE NOT NULL,
    `availableMoney` DOUBLE NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `treatmentCount` INTEGER NULL,
    `discountPercentage` DOUBLE NULL,
    `isActive` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `paymentReference` VARCHAR(191) NULL,

    UNIQUE INDEX `CreditAccount_creditCode_key`(`creditCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `CreditTransfer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fromTransactionId` INTEGER NOT NULL,
    `toTransactionId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CreditTransaction` ADD CONSTRAINT `CreditTransaction_creditAccountId_fkey` FOREIGN KEY (`creditAccountId`) REFERENCES `CreditAccount`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreditTransfer` ADD CONSTRAINT `CreditTransfer_fromTransactionId_fkey` FOREIGN KEY (`fromTransactionId`) REFERENCES `CreditTransaction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreditTransfer` ADD CONSTRAINT `CreditTransfer_toTransactionId_fkey` FOREIGN KEY (`toTransactionId`) REFERENCES `CreditTransaction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
