-- CreateTable
CREATE TABLE `PaymentDetails` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `amountMoney` DOUBLE NOT NULL,
    `paymentMethod` ENUM('STRIPE', 'MOBILEPAY', 'BANK_TRANSFER', 'MANUAL') NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `reference` VARCHAR(191) NOT NULL,
    `paymentStatus` ENUM('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `PaymentDetails_reference_key`(`reference`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
