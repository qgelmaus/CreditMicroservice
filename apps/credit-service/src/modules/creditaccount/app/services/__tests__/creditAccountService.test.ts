import { DomainEventPublisher } from "packages/rabbitmq/src/types.ts";
import { CreditAccountRepository } from "../../../infrastructure/repository/creditaccount.repository.ts";
import { CreditTransactionRepository } from "../../../infrastructure/repository/creditTransaction.repository.ts";
import { CreditTransferRepository } from "../../../infrastructure/repository/creditTransfer.repository.ts";
import { CreditAccountType } from "apps/credit-service/src/prisma/generated/client/index.js";
import { CreditAccountService } from "../creditAccount.service.ts";
import { mock } from "jest-mock-extended";

describe("CreditAccountService", () => {
  it("should create a gift account and publish event", async () => {
    const accountRepo = mock<CreditAccountRepository>();
    const transactionRepo = mock<CreditTransactionRepository>();
    const transferRepo = mock<CreditTransferRepository>();
    const publisher = mock<DomainEventPublisher>();

    const savedAccount = {
      id: 1,
      creditCode: "RR1234567",
      type: CreditAccountType.GIFT_CARD,
      originalCredits: 100,
      originalMoney: 100,
      availableCredits: 100,
      availableMoney: 100,
      email: "test@kunde.dk",
      address: null,
      phoneNumber: null,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      expiresAt: new Date(),
      isActive: true,
      paymentReference: null,
      treatmentCount: null,
      discountPercentage: null,
    };

    accountRepo.create.mockResolvedValue(savedAccount);

    const service = new CreditAccountService(
      accountRepo,
      transactionRepo,
      transferRepo,
      publisher,
    );

    const result = await service.createGiftAccount(100, "test@kunde.dk");

    expect(accountRepo.create).toHaveBeenCalled();
    expect(transactionRepo.logPurchase).toHaveBeenCalledWith(1, 100, 100);
    expect(publisher.publish).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({
          type: "GIFT_CARD",
          email: "test@kunde.dk",
        }),
      }),
    );

    expect(result.originalCredits).toBe(100);
    expect(result.originalMoney).toBe(100);
  });
});

it("should use credits and log transaction", async () => {
  const accountRepo = mock<CreditAccountRepository>();
  const transactionRepo = mock<CreditTransactionRepository>();
  const transferRepo = mock<CreditTransferRepository>();
  const publisher = mock<DomainEventPublisher>();

  const dbAccount = {
    id: 1,
    creditCode: "RR1234567",
    type: CreditAccountType.GIFT_CARD,
    originalCredits: 100,
    originalMoney: 100,
    availableCredits: 100,
    availableMoney: 100,
    email: "test@kunde.dk",
    address: null,
    phoneNumber: null,
    notes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    expiresAt: new Date(),
    isActive: true,
    paymentReference: null,
    treatmentCount: null,
    discountPercentage: null,
    transactions: [],
  };

  accountRepo.findByCreditCode.mockResolvedValue(dbAccount);
  accountRepo.updateState.mockResolvedValue({
    ...dbAccount,
    availableCredits: 80,
  });

  const service = new CreditAccountService(
    accountRepo,
    transactionRepo,
    transferRepo,
    publisher,
  );

  const result = await service.useCredits("RR1234567", 20, "test note");

  expect(accountRepo.findByCreditCode).toHaveBeenCalledWith("RR1234567");
  expect(accountRepo.updateState).toHaveBeenCalled();
  expect(transactionRepo.logCreditUsed).toHaveBeenCalledWith(
    1,
    20,
    20,
    "test note",
  );
  expect(result.availableCredits).toBe(80);
});

it("should refund credits and log transaction", async () => {
  const accountRepo = mock<CreditAccountRepository>();
  const transactionRepo = mock<CreditTransactionRepository>();
  const transferRepo = mock<CreditTransferRepository>();
  const publisher = mock<DomainEventPublisher>();

  const dbAccount = {
    id: 1,
    creditCode: "RR7654321",
    type: CreditAccountType.GIFT_CARD,
    originalCredits: 100,
    originalMoney: 100,
    availableCredits: 80,
    availableMoney: 100,
    email: "test@kunde.dk",
    address: null,
    phoneNumber: null,
    notes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    expiresAt: new Date(),
    isActive: true,
    paymentReference: null,
    treatmentCount: null,
    discountPercentage: null,
    transactions: [],
  };

  accountRepo.findByCreditCode.mockResolvedValue(dbAccount);
  accountRepo.updateState.mockResolvedValue({
    ...dbAccount,
    availableCredits: 90,
  });

  const service = new CreditAccountService(
    accountRepo,
    transactionRepo,
    transferRepo,
    publisher,
  );

  const result = await service.refundCredits("RR7654321", 10, "refunderet");

  expect(accountRepo.findByCreditCode).toHaveBeenCalledWith("RR7654321");
  expect(accountRepo.updateState).toHaveBeenCalled();
  expect(transactionRepo.logCreditRefund).toHaveBeenCalledWith(
    1,
    10,
    10,
    "refunderet",
  );
  expect(result.availableCredits).toBe(90);
});

it("should transfer credits between accounts and log transactions", async () => {
  const accountRepo = mock<CreditAccountRepository>();
  const transactionRepo = mock<CreditTransactionRepository>();
  const transferRepo = mock<CreditTransferRepository>();
  const publisher = mock<DomainEventPublisher>();

  const fromAccount = {
    id: 1,
    creditCode: "RRFROM",
    type: CreditAccountType.GIFT_CARD,
    originalCredits: 100,
    originalMoney: 100,
    availableCredits: 80,
    availableMoney: 100,
    email: "from@kunde.dk",
    address: null,
    phoneNumber: null,
    notes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    expiresAt: new Date(),
    isActive: true,
    paymentReference: null,
    treatmentCount: null,
    discountPercentage: null,
    transactions: [],
  };

  const toAccount = {
    ...fromAccount,
    id: 2,
    creditCode: "RRTO",
    email: "to@kunde.dk",
    availableCredits: 20,
  };

  accountRepo.findByCreditCode.mockImplementation(async (code) =>
    code === "RRFROM" ? fromAccount : toAccount,
  );

  accountRepo.updateState
    .mockResolvedValueOnce({ ...fromAccount, availableCredits: 60 })
    .mockResolvedValueOnce({ ...toAccount, availableCredits: 40 });

  transactionRepo.logCreditTransferOut.mockResolvedValue({
    id: 101,
    type: "TRANSFER_OUT",
    createdAt: new Date(),
    creditAccountId: 1,
    credits: 20,
    money: 20,
    note: "overførsel",
  });

  transactionRepo.logCreditTransferIn.mockResolvedValue({
    id: 102,
    type: "TRANSFER_IN",
    createdAt: new Date(),
    creditAccountId: 2,
    credits: 20,
    money: 20,
    note: "overførsel",
  });

  transferRepo.saveCreditTransfer.mockResolvedValue({
    id: 999,
    fromTransactionId: 101,
    toTransactionId: 102,
    amount: 20,
    createdAt: new Date(),
  });

  const service = new CreditAccountService(
    accountRepo,
    transactionRepo,
    transferRepo,
    publisher,
  );

  const result = await service.transferCredits(
    "RRFROM",
    "RRTO",
    20,
    "overførsel",
  );

  expect(accountRepo.findByCreditCode).toHaveBeenCalledWith("RRFROM");
  expect(accountRepo.findByCreditCode).toHaveBeenCalledWith("RRTO");
  expect(accountRepo.updateState).toHaveBeenCalledTimes(2);
  expect(transactionRepo.logCreditTransferOut).toHaveBeenCalledWith(
    1,
    20,
    20,
    "overførsel",
  );
  expect(transactionRepo.logCreditTransferIn).toHaveBeenCalledWith(
    2,
    20,
    20,
    "overførsel",
  );
  expect(transferRepo.saveCreditTransfer).toHaveBeenCalledWith(101, 102, 20);
  expect(result.amount).toBe(20);
});

it("should refund money and log transaction", async () => {
  const accountRepo = mock<CreditAccountRepository>();
  const transactionRepo = mock<CreditTransactionRepository>();
  const transferRepo = mock<CreditTransferRepository>();
  const publisher = mock<DomainEventPublisher>();

  const dbAccount = {
    id: 1,
    creditCode: "RR9999999",
    type: CreditAccountType.GIFT_CARD,
    originalCredits: 100,
    originalMoney: 100,
    availableCredits: 100,
    availableMoney: 80,
    email: "test@kunde.dk",
    address: null,
    phoneNumber: null,
    notes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    expiresAt: new Date(),
    isActive: true,
    paymentReference: null,
    treatmentCount: null,
    discountPercentage: null,
    transactions: [],
  };

  accountRepo.findByCreditCode.mockResolvedValue(dbAccount);
  accountRepo.updateState.mockResolvedValue({
    ...dbAccount,
    availableMoney: 60,
  });

  const service = new CreditAccountService(
    accountRepo,
    transactionRepo,
    transferRepo,
    publisher,
  );

  const result = await service.refundMoney("RR9999999", 20, "tilbageført");

  expect(accountRepo.findByCreditCode).toHaveBeenCalledWith("RR9999999");
  expect(accountRepo.updateState).toHaveBeenCalled();
  expect(transactionRepo.logMoneyRefund).toHaveBeenCalledWith(
    1,
    0,
    20,
    "tilbageført",
  );
  expect(result.availableMoney).toBe(60);
});

it("should nullify account and log removed credits and money", async () => {
  const accountRepo = mock<CreditAccountRepository>();
  const transactionRepo = mock<CreditTransactionRepository>();
  const transferRepo = mock<CreditTransferRepository>();
  const publisher = mock<DomainEventPublisher>();

  const dbAccount = {
    id: 1,
    creditCode: "RRNULL00",
    type: CreditAccountType.GIFT_CARD,
    originalCredits: 100,
    originalMoney: 100,
    availableCredits: 50,
    availableMoney: 40,
    email: "nullify@kunde.dk",
    address: null,
    phoneNumber: null,
    notes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    expiresAt: new Date(),
    isActive: true,
    paymentReference: null,
    treatmentCount: null,
    discountPercentage: null,
    transactions: [],
  };

  accountRepo.findByCreditCode.mockResolvedValue(dbAccount);
  accountRepo.updateState.mockResolvedValue({
    ...dbAccount,
    availableCredits: 0,
    availableMoney: 0,
  });

  const service = new CreditAccountService(
    accountRepo,
    transactionRepo,
    transferRepo,
    publisher,
  );

  const result = await service.nullifyAccount("RRNULL00", "anmodning");

  expect(accountRepo.findByCreditCode).toHaveBeenCalledWith("RRNULL00");
  expect(accountRepo.updateState).toHaveBeenCalled();
  expect(transactionRepo.logNullification).toHaveBeenCalledWith(
    1,
    50,
    40,
    "anmodning",
  );
  expect(result.availableCredits).toBe(0);
  expect(result.availableMoney).toBe(0);
});
