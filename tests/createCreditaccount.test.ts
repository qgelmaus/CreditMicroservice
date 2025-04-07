import request from "supertest";
import { app } from "../src/app";
import { resetDatabase } from "../src/creditaccounts/infrastructure/db/reset";

describe("Testing CreditAccount is created", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: PREPAID_CARD
          originalCredits: 1000
          originalMoney: 1000
          
        ) {
          id
          
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });
		expect(response.status).toBe(200);
	});
});

describe("Testing CreditAccount is created and email", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: PREPAID_CARD
          originalCredits: 1000
          originalMoney: 1000
          
        ) {
         
          email
         
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });

		expect(response.status).toBe(200);
		expect(response.body.data.createCreditAccount.email).toBe("test@tdd.com");
	});
});

describe("Testing CreditAccount is created and type to be PREPAID_CARD", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: PREPAID_CARD
          originalCredits: 1000
          originalMoney: 1000
          
        ) {
          
         type
          
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });

		expect(response.status).toBe(200);

		expect(response.body.data.createCreditAccount.type).toBe("PREPAID_CARD");
	});
});

describe("Testing CreditAccount is created and creditcode to match pattern of RR followed by 7 digits", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: PREPAID_CARD
          originalCredits: 1000
          originalMoney: 1000
          
        ) {
          
          creditCode
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });

		expect(response.status).toBe(200);
		expect(response.body.data.createCreditAccount.creditCode).toMatch(
			/^RR\d{7}$/,
		);
	});
});

describe("Testing CreditAccount is created and original money/credits is set correct", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: PREPAID_CARD
          originalCredits: 1000
          originalMoney: 800
          
        ) {
          originalMoney
          originalCredits
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });

		expect(response.status).toBe(200);
		expect(response.body.data.createCreditAccount.originalMoney).toBe(800);
		expect(response.body.data.createCreditAccount.originalCredits).toBe(1000);
	});
});

describe("Testing CreditAccount is created and available money/credits is set to original money/credits", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: PREPAID_CARD
          originalCredits: 1000
          originalMoney: 1000
          
        ) {
          availableCredits
          availableMoney
          originalCredits
          originalMoney
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });

		expect(response.status).toBe(200);
		expect(response.body.data.createCreditAccount.availableCredits).toBe(
			response.body.data.createCreditAccount.originalCredits,
		);
		expect(response.body.data.createCreditAccount.availableMoney).toBe(
			response.body.data.createCreditAccount.originalMoney,
		);
	});
});

describe("Testing CreditAccount is created and dateCreated is set to today and dateExpiration is set 3 years from today", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: PREPAID_CARD
          originalCredits: 1000
          originalMoney: 1000
          
        ) {
          dateCreated
          dateExpired
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });

		console.log(response.body);

		const now = new Date();
		const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
		const threeYearsAhead = new Date(today);
		threeYearsAhead.setFullYear(threeYearsAhead.getFullYear() + 3);

		expect(response.status).toBe(200);
		expect(response.body.data.createCreditAccount.dateCreated.set).toBe(today);
		expect(response.body.data.createCreditAccount.dateExpired).toBe(
			threeYearsAhead,
		);
	});
});
