import request from "supertest";
import { app } from "../src/app";
import { resetDatabase } from "../src/shared/infrastructure/db/reset";
import { TransactionDTO } from "../src/modules/creditaccount/app/dto/creditaccount.types";

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
    availableCredits
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
    availableCredits
  }
}
  `;

		//Getting codes from the responses:
		const createFromAccountResponse = await request(app)
			.post("/graphql")
			.send({ query: createFromAccountMutation });

		const fromCode =
			createFromAccountResponse.body.data.createGiftAccount.creditCode;

		const createToAccountResponse = await request(app)
			.post("/graphql")
			.send({ query: createToAccountMutation });

		const toCode =
			createToAccountResponse.body.data.createGiftAccount.creditCode;

		//kontrollér værdier før transfer:
		expect(
			createFromAccountResponse.body.data.createGiftAccount.availableCredits,
		).toBe(initialValue);
		expect(
			createToAccountResponse.body.data.createGiftAccount.availableCredits,
		).toBe(initialValue);

		const transferCreditMutation = `
    mutation {
      transferCredits(input: { fromCreditCode: "${fromCode}", toCreditCode: "${toCode}", amount: ${transferValue}}) {
        createdAt
      }
    }
  `;

		const transferResponse = await request(app)
			.post("/graphql")
			.send({ query: transferCreditMutation });

		const postTransferFrom = await request(app)
			.post("/graphql")
			.send({
				query: `query { creditAccountByCode(code: "${fromCode}") { availableCredits } }`,
			});

		const postTransferTo = await request(app)
			.post("/graphql")
			.send({
				query: `query { creditAccountByCode(code: "${toCode}") { availableCredits } }`,
			});

		expect(
			postTransferFrom.body.data.creditAccountByCode.availableCredits,
		).toBe(initialValue - transferValue);
		expect(postTransferTo.body.data.creditAccountByCode.availableCredits).toBe(
			initialValue + transferValue,
		);
		expect(transferResponse.status).toBe(200);
	});
});

describe("Testing the right values are saved in transactions and transfer records", () => {
	beforeEach(async () => {
		await resetDatabase();
	});
	it("creates transfer transactions on both accounts", async () => {
		const amount = 200;

		//Opret FROM-konto
		const fromRes = await request(app)
			.post("/graphql")
			.send({
				query: `
      mutation {
        createGiftAccount(input: {
          purchaseAmount: 500,
          email: "from@transfer.dk"
        }) {
          creditCode
        }
      }
    `,
			});
		const fromCode = fromRes.body.data.createGiftAccount.creditCode;

		//Opret TO-konto
		const toRes = await request(app)
			.post("/graphql")
			.send({
				query: `
      mutation {
        createGiftAccount(input: {
          purchaseAmount: 500,
          email: "to@transfer.dk"
        }) {
          creditCode
        }
      }
    `,
			});
		const toCode = toRes.body.data.createGiftAccount.creditCode;

		//transfer
		const transferRes = await request(app)
			.post("/graphql")
			.send({
				query: `
      mutation {
        transferCredits(input: {
          fromCreditCode: "${fromCode}",
          toCreditCode: "${toCode}",
          amount: ${amount},
          note: "Test transfer"
        }) {
          fromTransactionId
          toTransactionId
        }
      }
    `,
			});

		expect(transferRes.status).toBe(200);

		const { fromTransactionId, toTransactionId } =
			transferRes.body.data.transferCredits;

		//Hent transaktioner
		const fromTxQuery = `
    query {
      creditAccountByCode(code: "${fromCode}") {
        transactions {
          id
          type
        }
      }
    }
  `;

		const toTxQuery = `
    query {
      creditAccountByCode(code: "${toCode}") {
        transactions {
          id
          type
        }
      }
    }
  `;

		const fromTxRes = await request(app)
			.post("/graphql")
			.send({ query: fromTxQuery });
		const toTxRes = await request(app)
			.post("/graphql")
			.send({ query: toTxQuery });

		const fromTransactions =
			fromTxRes.body.data.creditAccountByCode.transactions;
		const toTransactions = toTxRes.body.data.creditAccountByCode.transactions;

		//Find forventede transaktioner
		const fromMatch = fromTransactions.find(
			(tx: TransactionDTO) =>
				tx.id === fromTransactionId && tx.type === "TRANSFER_OUT",
		);
		const toMatch = toTransactions.find(
			(tx: TransactionDTO) =>
				tx.id === toTransactionId && tx.type === "TRANSFER_IN",
		);

		expect(fromMatch).toBeDefined();
		expect(toMatch).toBeDefined();
	});
});
