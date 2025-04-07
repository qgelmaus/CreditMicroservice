import request from "supertest";
import { app } from "../src/app";
import { resetDatabase } from "../src/infrastructure/db/reset";

describe("CreditAccount", () => {
	beforeEach(async () => {
		await resetDatabase();
	});

	it("creates a credit account", async () => {
		const mutation = `
      mutation {
        createCreditAccount(
          email: "test@tdd.com"
          type: GIFT_CARD
          originalCredits: 1000
          originalMoney: 1000
          
        ) {
          id
          email
          type
          creditCode
        }
      }
    `;

		const response = await request(app)
			.post("/graphql")
			.send({ query: mutation });

		expect(response.status).toBe(200);
		expect(response.body.data.createCreditAccount.email).toBe("test@tdd.com");
		expect(response.body.data.createCreditAccount.type).toBe("gift_card");
		expect(response.body.data.createCreditAccount.creditCode).toMatch(
			/^RR\d{7}$/,
		);
	});
});
