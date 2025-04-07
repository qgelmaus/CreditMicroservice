/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `CreditAccounts` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[CreditTransactions] DROP CONSTRAINT [CreditTransactions_creditAccountId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[CreditTransfer] DROP CONSTRAINT [CreditTransfer_toCreditTransactionId_fkey];

-- CreateIndex
ALTER TABLE [dbo].[CreditAccounts] ADD CONSTRAINT [CreditAccounts_email_key] UNIQUE NONCLUSTERED ([email]);

-- AddForeignKey
ALTER TABLE [dbo].[CreditTransactions] ADD CONSTRAINT [CreditTransactions_creditAccountId_fkey] FOREIGN KEY ([creditAccountId]) REFERENCES [dbo].[CreditAccounts]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditTransfer] ADD CONSTRAINT [CreditTransfer_toCreditTransactionId_fkey] FOREIGN KEY ([toCreditTransactionId]) REFERENCES [dbo].[CreditTransactions]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
