// apps/credit-service/src/modules/creditaccount/graphql/__tests__/creditAccount.graphql.test.ts
import { ApolloServer } from "@apollo/server";

import { mock } from "jest-mock-extended";
import { CreditAccountService } from "../../app/services/creditAccount.service.ts";
import { TestContext } from "apps/credit-service/src/context/context.types.ts";
import { loadCreditAccountModule } from "../schema/index.ts";

const CREATE_MUTATION = `
  mutation CreateCreditAccount($input: CreateCreditAccountInput!) {
    createCreditAccount(input: $input) {
      creditCode
      email
      originalCredits
    }
  }
`;

const REFUND_CREDITS_MUTATION = `
  mutation RefundCredits($input: RefundCreditsInput!) {
    refundCredits(input: $input) {
      creditCode
      availableCredits
    }
  }
`;

const TRANSFER_CREDITS_MUTATION = `
  mutation TransferCredits($input: TransferCreditsInput!) {
    transferCredits(input: $input) {
      fromTransactionId
      toTransactionId
      amount
      createdAt
    }
  }
`;

const REFUND_MONEY_MUTATION = `
  mutation RefundMoney($input: RefundMoneyInput!) {
    refundMoney(input: $input) {
      creditCode
      availableMoney
    }
  }
`;

const FIND_BY_CODE_QUERY = `
  query FindByCode($code: String!) {
    creditAccountByCode(code: $code) {
      creditCode
      email
      availableCredits
      availableMoney
    }
  }
`;

const FIND_BY_EMAIL_QUERY = `
  query FindByEmail($email: String!) {
    creditAccountByEmail(email: $email) {
      creditCode
      type
      availableCredits
      availableMoney
    }
  }
`;

describe("GraphQL API", () => {
  it("handles createCreditAccount mutation", async () => {
    const service = mock<CreditAccountService>();
    service.createCreditAccount.mockResolvedValue({
      id: 1,
      creditCode: "RR1234567",
      email: "test@kunde.dk",
      type: "GIFT_CARD",
      originalCredits: 100,
      originalMoney: 100,
      availableCredits: 100,
      availableMoney: 100,
      createdAt: new Date(),
      expiresAt: new Date(),
      isActive: true,
    });

    const creditAccountModule = await loadCreditAccountModule();

    const server = new ApolloServer<TestContext>({
      typeDefs: creditAccountModule.typeDefs,
      resolvers: creditAccountModule.resolvers,
    });

    const result = await server.executeOperation(
      {
        query: CREATE_MUTATION,
        variables: {
          input: {
            email: "test@kunde.dk",
            type: "GIFT_CARD",
            purchaseAmount: 100,
          },
        },
      },
      {
        contextValue: {
          creditAccountService: service,
        },
      }
    );

    expect(result.body.kind).toBe("single");
    if (result.body.kind === "single") {
      const data = result.body.singleResult.data as {
        createCreditAccount: {
          email: string;
          creditCode: string;
          originalCredits: number;
        };
      };

      expect(data.createCreditAccount.email).toBe("test@kunde.dk");
    }
  });
  const USE_CREDITS_MUTATION = `
  mutation UseCredits($input: UseCreditsInput!) {
    useCredits(input: $input) {
      creditCode
      availableCredits
      availableMoney
    }
  }
`;

  it("uses credits and returns updated account", async () => {
    const service = mock<CreditAccountService>();
    service.useCredits.mockResolvedValue({
      id: 1,
      creditCode: "RRUSE123",
      email: "bruger@kunde.dk",
      type: "GIFT_CARD",
      originalCredits: 100,
      originalMoney: 100,
      availableCredits: 75,
      availableMoney: 100,
      createdAt: new Date(),
      expiresAt: new Date(),
      isActive: true,
    });

    const creditAccountModule = await loadCreditAccountModule();
    const server = new ApolloServer<TestContext>({
      typeDefs: creditAccountModule.typeDefs,
      resolvers: creditAccountModule.resolvers,
    });

    const result = await server.executeOperation(
      {
        query: USE_CREDITS_MUTATION,
        variables: {
          input: {
            creditCode: "RRUSE123",
            cost: 25,
            note: "Booking",
          },
        },
      },
      {
        contextValue: { creditAccountService: service },
      }
    );

    if (result.body.kind === "single") {
      const data = result.body.singleResult.data as {
        useCredits: {
          creditCode: string;
          availableCredits: number;
        };
      };

      expect(service.useCredits).toHaveBeenCalledWith(
        "RRUSE123",
        25,
        "Booking"
      );
      expect(data.useCredits.creditCode).toBe("RRUSE123");
      expect(data.useCredits.availableCredits).toBe(75);
    } else {
      throw new Error("Expected single GraphQL response");
    }
  });

  it("refunds credits and returns updated account", async () => {
    const service = mock<CreditAccountService>();
    service.refundCredits.mockResolvedValue({
      id: 1,
      creditCode: "RR1111",
      email: "refund@kunde.dk",
      type: "GIFT_CARD",
      originalCredits: 100,
      originalMoney: 100,
      availableCredits: 90,
      availableMoney: 100,
      createdAt: new Date(),

      expiresAt: new Date(),
      isActive: true,
    });

    const creditAccountModule = await loadCreditAccountModule();

    const server = new ApolloServer<TestContext>({
      typeDefs: creditAccountModule.typeDefs,
      resolvers: creditAccountModule.resolvers,
    });

    const result = await server.executeOperation(
      {
        query: REFUND_CREDITS_MUTATION,
        variables: {
          input: {
            creditCode: "RR1111",
            cost: 10,
            note: "refunderet",
          },
        },
      },
      {
        contextValue: { creditAccountService: service },
      }
    );

    if (result.body.kind === "single") {
      const data = result.body.singleResult.data as {
        refundCredits: {
          creditCode: string;
          availableCredits: number;
        };
      };

      expect(service.refundCredits).toHaveBeenCalledWith(
        "RR1111",
        10,
        "refunderet"
      );
      expect(data.refundCredits.creditCode).toBe("RR1111");
      expect(data.refundCredits.availableCredits).toBe(90);
    } else {
      throw new Error("Expected single GraphQL response");
    }
  });

  it("transfers credits and returns transfer details", async () => {
    const service = mock<CreditAccountService>();
    service.transferCredits.mockResolvedValue({
      amount: 20,
      fromTransactionId: 101,
      toTransactionId: 102,
      createdAt: new Date(),
    });

    const creditAccountModule = await loadCreditAccountModule();
    const server = new ApolloServer<TestContext>({
      typeDefs: creditAccountModule.typeDefs,
      resolvers: creditAccountModule.resolvers,
    });

    const result = await server.executeOperation(
      {
        query: TRANSFER_CREDITS_MUTATION,
        variables: {
          input: {
            fromCreditCode: "RRFROM",
            toCreditCode: "RRTO",
            amount: 20,
            note: "overførsel",
          },
        },
      },
      {
        contextValue: { creditAccountService: service },
      }
    );

    if (result.body.kind === "single") {
      const data = result.body.singleResult.data as {
        transferCredits: {
          amount: number;
          fromTransactionId: number;
          toTransactionId: number;
        };
      };

      expect(service.transferCredits).toHaveBeenCalledWith(
        "RRFROM",
        "RRTO",
        20,
        "overførsel"
      );
      expect(data.transferCredits.amount).toBe(20);
      expect(data.transferCredits.fromTransactionId).toBe(101);
      expect(data.transferCredits.toTransactionId).toBe(102);
    } else {
      throw new Error("Expected single GraphQL response");
    }
  });

  it("refunds money and returns updated account", async () => {
    const service = mock<CreditAccountService>();
    service.refundMoney.mockResolvedValue({
      id: 1,
      creditCode: "RRMONEY",
      email: "money@kunde.dk",
      type: "GIFT_CARD",
      originalCredits: 100,
      originalMoney: 100,
      availableCredits: 100,
      availableMoney: 80,
      createdAt: new Date(),
      expiresAt: new Date(),
      isActive: true,
    });

    const creditAccountModule = await loadCreditAccountModule();

    const server = new ApolloServer<TestContext>({
      typeDefs: creditAccountModule.typeDefs,
      resolvers: creditAccountModule.resolvers,
    });

    const result = await server.executeOperation(
      {
        query: REFUND_MONEY_MUTATION,
        variables: {
          input: {
            creditCode: "RRMONEY",
            money: 20,
            note: "kunde fik refunderet",
          },
        },
      },
      {
        contextValue: { creditAccountService: service },
      }
    );

    if (result.body.kind === "single") {
      const data = result.body.singleResult.data as {
        refundMoney: {
          creditCode: string;
          availableMoney: number;
        };
      };

      expect(service.refundMoney).toHaveBeenCalledWith(
        "RRMONEY",
        20,
        "kunde fik refunderet"
      );
      expect(data.refundMoney.creditCode).toBe("RRMONEY");
      expect(data.refundMoney.availableMoney).toBe(80);
    } else {
      throw new Error("Expected single GraphQL response");
    }
  });

  it("fetches credit account by code", async () => {
    const service = mock<CreditAccountService>();
    service.findByCode.mockResolvedValue({
      id: 1,
      creditCode: "RRLOOKUP",
      email: "lookup@kunde.dk",
      type: "GIFT_CARD",
      originalCredits: 100,
      originalMoney: 100,
      availableCredits: 70,
      availableMoney: 100,
      createdAt: new Date(),
      expiresAt: new Date(),
      isActive: true,
    });

    const creditAccountModule = await loadCreditAccountModule();
    const server = new ApolloServer<TestContext>({
      typeDefs: creditAccountModule.typeDefs,
      resolvers: creditAccountModule.resolvers,
    });

    const result = await server.executeOperation(
      {
        query: FIND_BY_CODE_QUERY,
        variables: {
          code: "RRLOOKUP",
        },
      },
      {
        contextValue: { creditAccountService: service },
      }
    );

    if (result.body.kind === "single") {
      const data = result.body.singleResult.data as {
        creditAccountByCode: {
          creditCode: string;
          email: string;
          availableCredits: number;
          availableMoney: number;
        };
      };

      expect(service.findByCode).toHaveBeenCalledWith("RRLOOKUP");
      expect(data.creditAccountByCode.creditCode).toBe("RRLOOKUP");
      expect(data.creditAccountByCode.email).toBe("lookup@kunde.dk");
      expect(data.creditAccountByCode.availableCredits).toBe(70);
    } else {
      throw new Error("Expected single GraphQL response");
    }
  });

  it("fetches credit accounts by email", async () => {
    const service = mock<CreditAccountService>();
    service.findByEmail.mockResolvedValue([
      {
        id: 1,
        creditCode: "RR1",
        email: "kunde@kunde.dk",
        type: "GIFT_CARD",
        originalCredits: 100,
        originalMoney: 100,
        availableCredits: 80,
        availableMoney: 100,
        createdAt: new Date(),

        expiresAt: new Date(),
        isActive: true,
      },
      {
        id: 1,
        creditCode: "RR2",
        email: "kunde@kunde.dk",
        type: "PREPAID_CARD",
        originalCredits: 50,
        originalMoney: 42,
        availableCredits: 25,
        availableMoney: 21,
        treatmentCount: 5,
        discountPercentage: 16,
        createdAt: new Date(),

        expiresAt: new Date(),
        isActive: true,
      },
    ]);
    const creditAccountModule = await loadCreditAccountModule();

    const server = new ApolloServer<TestContext>({
      typeDefs: creditAccountModule.typeDefs,
      resolvers: creditAccountModule.resolvers,
    });

    const result = await server.executeOperation(
      {
        query: FIND_BY_EMAIL_QUERY,
        variables: {
          email: "kunde@kunde.dk",
        },
      },
      {
        contextValue: { creditAccountService: service },
      }
    );

    if (result.body.kind === "single") {
      const data = result.body.singleResult.data as {
        creditAccountByEmail: {
          creditCode: string;
          type: string;
          availableCredits: number;
        }[];
      };

      expect(service.findByEmail).toHaveBeenCalledWith("kunde@kunde.dk");
      expect(data.creditAccountByEmail).toHaveLength(2);
      expect(data.creditAccountByEmail[0].creditCode).toBe("RR1");
      expect(data.creditAccountByEmail[1].creditCode).toBe("RR2");
    } else {
      throw new Error("Expected single GraphQL response");
    }
  });
});
