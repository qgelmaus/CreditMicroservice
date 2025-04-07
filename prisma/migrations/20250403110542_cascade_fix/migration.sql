BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[CreditTransfer] DROP CONSTRAINT [CreditTransfer_fromCreditTransactionId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[CreditTransfer] DROP CONSTRAINT [CreditTransfer_toCreditTransactionId_fkey];

-- AddForeignKey
ALTER TABLE [dbo].[CreditTransfer] ADD CONSTRAINT [CreditTransfer_fromCreditTransactionId_fkey] FOREIGN KEY ([fromCreditTransactionId]) REFERENCES [dbo].[CreditTransactions]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

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
