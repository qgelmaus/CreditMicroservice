import request from "supertest";
import { app } from "../src/app";
import { resetDatabase } from "../src/shared/infrastructure/db/reset";

describe("Testing CreditAccount is created", () => {
  beforeEach(async () => {
    await resetDatabase();
  });

  it("creates a credit account of gift type", async () => {
    const mutation = `
      mutation {
  createGiftAccount(input: {
    purchaseAmount: 300,
    email: "modtager@eksempel.dk"
  }) {
    creditCode
    originalCredits
    availableCredits
    type
  }
}
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation });
    expect(response.status).toBe(200);
  });

  it("creates a credit account of prepaid type", async () => {
    const mutation = `
		mutation {
  createPrepaidAccount(input: {
    treatmentCount: 10,
    pricePerTreatment: 250,
    email: "kunde@eksempel.dk"
  }) {
    creditCode
    originalMoney
    availableCredits
    discountPercentage
    type
  }
}`;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation });
    expect(response.status).toBe(200);
  });
});

describe("Testing accounts are created with the right values", () => {
  beforeEach(async () => {
    await resetDatabase();
  });

  it("creates a credit account of prepaid type with treatmentCount and pricePerTreatment", async () => {
    const treatmentCount = 10;
    const pricePerTreatment = 250;
    const totalPrice = treatmentCount * pricePerTreatment;
    const mutation = `
		mutation {
  createPrepaidAccount(input: {
    treatmentCount: ${treatmentCount},
    pricePerTreatment: ${pricePerTreatment},
    email: "kunde@eksempel.dk"
  }) {
    creditCode
    originalMoney
	originalCredits
	availableMoney
    availableCredits
    discountPercentage
    type
  }
}`;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation });

    const responseBodyData = response.body.data.createPrepaidAccount;

    expect(responseBodyData.originalMoney).toBe(totalPrice * 0.84);
    expect(responseBodyData.availableMoney).toBe(totalPrice * 0.84);

    expect(responseBodyData.originalCredits).toBe(totalPrice);
    expect(responseBodyData.availableCredits).toBe(totalPrice);
  });
  it("creates a credit account of giftcard type with the cost 500", async () => {
    const cost = 500;
    const mutation = `
		
      mutation {
  createGiftAccount(input: {
    purchaseAmount: ${cost},
    email: "modtager@eksempel.dk"
  }) {
    creditCode
    originalCredits
	originalMoney
    availableCredits
	availableMoney
    type
  }
}`;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation });

    const responseBodyData = response.body.data.createGiftAccount;

    expect(responseBodyData.originalMoney).toBe(cost);
    expect(responseBodyData.availableMoney).toBe(cost);

    expect(responseBodyData.originalCredits).toBe(cost);
    expect(responseBodyData.availableCredits).toBe(cost);
  });

  it("uses one credit from an account", async () => {
    const priceOfItem = 250;
    const giftCardValue = 500;
    const remainingValue = giftCardValue - priceOfItem;
    const createMutation = `
    mutation {
      createGiftAccount(input: {
        purchaseAmount: ${giftCardValue}
      }) {
        creditCode
		availableCredits
      }
    }
  `;

    const createResponse = await request(app)
      .post("/graphql")
      .send({ query: createMutation });

    const code = createResponse.body.data.createPrepaidAccount.creditCode;

    const useCreditMutation = `
    mutation {
      useCredit(input: { creditCode: "${code}", cost: ${priceOfItem} }) {
        availableCredits
      }
    }
  `;

    const useResponse = await request(app)
      .post("/graphql")
      .send({ query: useCreditMutation });

    expect(useResponse.status).toBe(200);
    expect(useResponse.body.data.useCredit.availableCredits).toBe(
      remainingValue
    );
  });
});
