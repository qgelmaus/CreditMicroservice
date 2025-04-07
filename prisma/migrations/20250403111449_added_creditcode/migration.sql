/*
  Warnings:

  - A unique constraint covering the columns `[creditCode]` on the table `CreditAccounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creditCode` to the `CreditAccounts` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[CreditAccounts] ADD [creditCode] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[CreditAccounts] ADD CONSTRAINT [CreditAccounts_creditCode_key] UNIQUE NONCLUSTERED ([creditCode]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
