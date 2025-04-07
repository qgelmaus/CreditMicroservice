BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[CreditAccounts] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [originalCredits] FLOAT(53) NOT NULL,
    [originalMoney] FLOAT(53) NOT NULL,
    [availableCredits] FLOAT(53) NOT NULL,
    [availableMoney] FLOAT(53) NOT NULL,
    [dateCreated] DATETIME2 NOT NULL CONSTRAINT [CreditAccounts_dateCreated_df] DEFAULT CURRENT_TIMESTAMP,
    [dateExpired] DATETIME2 NOT NULL CONSTRAINT [CreditAccounts_dateExpired_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [CreditAccounts_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CreditTransactions] (
    [id] INT NOT NULL IDENTITY(1,1),
    [creditAccountId] INT NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [note] NVARCHAR(1000),
    [credits] FLOAT(53) NOT NULL,
    [money] FLOAT(53) NOT NULL,
    CONSTRAINT [CreditTransactions_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CreditTransfer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [fromCreditTransactionId] INT NOT NULL,
    [toCreditTransactionId] INT NOT NULL,
    CONSTRAINT [CreditTransfer_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [CreditTransfer_fromCreditTransactionId_key] UNIQUE NONCLUSTERED ([fromCreditTransactionId]),
    CONSTRAINT [CreditTransfer_toCreditTransactionId_key] UNIQUE NONCLUSTERED ([toCreditTransactionId])
);

-- AddForeignKey
ALTER TABLE [dbo].[CreditTransactions] ADD CONSTRAINT [CreditTransactions_creditAccountId_fkey] FOREIGN KEY ([creditAccountId]) REFERENCES [dbo].[CreditAccounts]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditTransfer] ADD CONSTRAINT [CreditTransfer_fromCreditTransactionId_fkey] FOREIGN KEY ([fromCreditTransactionId]) REFERENCES [dbo].[CreditTransactions]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CreditTransfer] ADD CONSTRAINT [CreditTransfer_toCreditTransactionId_fkey] FOREIGN KEY ([toCreditTransactionId]) REFERENCES [dbo].[CreditTransactions]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
