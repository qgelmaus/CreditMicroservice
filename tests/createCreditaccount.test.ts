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
});

describe("Testing editing and movement of values", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("uses credit and one treatmentcount from a prepaidaccount", async () => {
		const priceOfItem = 200;
		const amountOfTreatments = 10;
		const totalMoney = 10 * 200 * 0.84;
		const createMutation = `
   mutation{
  createPrepaidAccount(input:{
    treatmentCount: ${amountOfTreatments},
    pricePerTreatment: ${priceOfItem}
    email:"testjest@kundeeksempel.dk"
  }){
    creditCode
    originalMoney
    originalCredits
  }
}
  `;

		const createResponse = await request(app)
			.post("/graphql")
			.send({ query: createMutation });

		expect(createResponse.body.data.createPrepaidAccount.originalMoney).toBe(
			totalMoney,
		);
		const code = createResponse.body.data.createPrepaidAccount.creditCode;

		const useCreditMutation = `
    mutation {
      useCredits(input: { creditCode: "${code}", cost: ${priceOfItem} }) {
        availableCredits
        availableMoney
        originalMoney
        ... on PrepaidAccount {
      treatmentCount
       }
      }
    }
  `;

		const useResponse = await request(app)
			.post("/graphql")
			.send({ query: useCreditMutation });

		expect(useResponse.status).toBe(200);
		expect(useResponse.body.data.useCredits.availableCredits).toBe(
			priceOfItem * amountOfTreatments - priceOfItem,
		);
		expect(useResponse.body.data.useCredits.availableMoney).toBe(
			totalMoney - priceOfItem * 0.84,
		);
		expect(useResponse.body.data.useCredits.treatmentCount).toBe(
			amountOfTreatments - 1,
		);
		expect(useResponse.body.data.useCredits.originalMoney).toBe(totalMoney);
	});

	it("refunds credit to a gift account", async () => {
		const priceOfItem = 250;
		const giftCardValue = 500;
		const remainingValue = giftCardValue - priceOfItem;
		const createMutation = `
   mutation{
  createGiftAccount(input:{
    purchaseAmount: ${giftCardValue},
    email:"testjest@kundeeksempel.dk"
  }){
    creditCode
  }
}
  `;

		const createResponse = await request(app)
			.post("/graphql")
			.send({ query: createMutation });

		const code = createResponse.body.data.createGiftAccount.creditCode;

		const useCreditMutation = `
    mutation {
      useCredits(input: { creditCode: "${code}", cost: ${priceOfItem} }) {
        availableCredits
      }
    }
  `;

		const useResponse = await request(app)
			.post("/graphql")
			.send({ query: useCreditMutation });

		expect(useResponse.status).toBe(200);
		expect(useResponse.body.data.useCredits.availableCredits).toBe(
			remainingValue,
		);

		const refundMutation = `
    mutation {
    refundCredits(input: { creditCode: "${code}", cost: ${priceOfItem} }) {
     availableCredits
      }
    }
   `;

		const refundResponse = await request(app)
			.post("/graphql")
			.send({ query: refundMutation });

		expect(refundResponse.status).toBe(200);
		expect(refundResponse.body.data.refundCredits.availableCredits).toBe(
			giftCardValue,
		);
	});

	it("refunds credit, money and treatmentcount to a prepaid account", async () => {
		const priceOfItem = 200;
		const amountOfTreatments = 10;
		const totalMoney = 10 * 200 * 0.84;
		const createMutation = `
   mutation{
  createPrepaidAccount(input:{
    treatmentCount: ${amountOfTreatments},
    pricePerTreatment: ${priceOfItem}
    email:"testjest@kundeeksempel.dk"
  }){
    creditCode
    originalMoney
  }
}
  `;

		const createResponse = await request(app)
			.post("/graphql")
			.send({ query: createMutation });

		expect(createResponse.body.data.createPrepaidAccount.originalMoney).toBe(
			totalMoney,
		);
		const code = createResponse.body.data.createPrepaidAccount.creditCode;

		const useCreditMutation = `
    mutation {
      useCredits(input: { creditCode: "${code}", cost: ${priceOfItem} }) {
        availableCredits
        availableMoney
        originalMoney
        ... on PrepaidAccount {
        treatmentCount
       }
      }
    }
  `;

		const useResponse = await request(app)
			.post("/graphql")
			.send({ query: useCreditMutation });

		expect(useResponse.status).toBe(200);
		expect(useResponse.body.data.useCredits.availableCredits).toBe(
			priceOfItem * amountOfTreatments - priceOfItem,
		);
		expect(useResponse.body.data.useCredits.availableMoney).toBe(
			totalMoney - priceOfItem * 0.84,
		);
		expect(useResponse.body.data.useCredits.treatmentCount).toBe(
			amountOfTreatments - 1,
		);
		expect(useResponse.body.data.useCredits.originalMoney).toBe(totalMoney);

		const refundMutation = `
    mutation {
    refundCredits(input: { creditCode: "${code}", cost: ${priceOfItem} }) {
     availableCredits
     availableMoney
     ... on PrepaidAccount {
        treatmentCount
       }
      }
    }
   `;

		const refundResponse = await request(app)
			.post("/graphql")
			.send({ query: refundMutation });

		expect(refundResponse.status).toBe(200);
		expect(refundResponse.body.data.refundCredits.availableCredits).toBe(
			amountOfTreatments * priceOfItem,
		);
		expect(refundResponse.body.data.refundCredits.availableMoney).toBe(
			totalMoney,
		);
		expect(refundResponse.body.data.refundCredits.treatmentCount).toBe(
			amountOfTreatments,
		);
	});

	it("transfers credit from one giftaccount to another", async () => {
		const initialValue = 500;
		const transferValue = 500;
		const fromAccountToBeValue = 0;
		const toAccountToBeValue = initialValue + transferValue;

		//Creating two accounts:
		const createFromAccountMutation = `
   mutation{
  createGiftAccount(input:{
    purchaseAmount: ${initialValue},
    email:"from@account.dk"
  }){
    creditCode
  }
}
  `;
		const createToAccountMutation = `
   mutation{
  createGiftAccount(input:{
    purchaseAmount: ${initialValue},
    email:"to@account.dk"
  }){
    creditCode
  }
}
  `;

		//Getting codes from the responses:
		const createFromAccountResponse = await request(app)
			.post("/graphql")
			.send({ query: createFromAccountMutation });

		const fromCode =
			createFromAccountResponse.body.data.createGiftAccount.creditCode;

		const createToAccountRespose = await request(app)
			.post("/graphql")
			.send({ query: createToAccountMutation });

		const toCode =
			createToAccountRespose.body.data.createGiftAccount.creditCode;

		const transferCreditMutation = `
    mutation {
      transferCredits(input: { fromCreditCode: "${fromCode}", toCreditCode: "${toCode}", amount: ${transferValue}}) {
        
      }
    }
  `;

		const useResponse = await request(app)
			.post("/graphql")
			.send({ query: transferCreditMutation });

		expect(useResponse.status).toBe(200);
	});
});
