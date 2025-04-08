-- CreateTable
CREATE TABLE `CreditAccounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creditCode` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `originalCredits` DOUBLE NOT NULL,
    `originalMoney` DOUBLE NOT NULL,
    `availableCredits` DOUBLE NOT NULL,
    `availableMoney` DOUBLE NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateExpired` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `CreditAccounts_creditCode_key`(`creditCode`),
    UNIQUE INDEX `CreditAccounts_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CreditTransactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creditAccountId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `note` VARCHAR(191) NULL,
    `credits` DOUBLE NOT NULL,
    `money` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CreditTransfer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fromCreditTransactionId` INTEGER NOT NULL,
    `toCreditTransactionId` INTEGER NOT NULL,

    UNIQUE INDEX `CreditTransfer_fromCreditTransactionId_key`(`fromCreditTransactionId`),
    UNIQUE INDEX `CreditTransfer_toCreditTransactionId_key`(`toCreditTransactionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CreditTransactions` ADD CONSTRAINT `CreditTransactions_creditAccountId_fkey` FOREIGN KEY (`creditAccountId`) REFERENCES `CreditAccounts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreditTransfer` ADD CONSTRAINT `CreditTransfer_fromCreditTransactionId_fkey` FOREIGN KEY (`fromCreditTransactionId`) REFERENCES `CreditTransactions`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `CreditTransfer` ADD CONSTRAINT `CreditTransfer_toCreditTransactionId_fkey` FOREIGN KEY (`toCreditTransactionId`) REFERENCES `CreditTransactions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
