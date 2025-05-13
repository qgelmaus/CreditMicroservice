import request from "supertest";
import {app} from "../../app"

describe("createCreditAccountWithPayment mutation", () => {
  it("should create a GiftCard and PaymentDetails", async () => {
    const mutation = `
      mutation {
        createCreditAccountWithPayment(input: {
          account: {
            type: GIFT_CARD
            email: "gift@test.dk"
            credits: 300
          }
          payment: {
            amountMoney: 300
            paymentMethod: STRIPE
            reference: "GIFT-ORDER-1"
          }
        }) {
          creditCode
          type
          email
          availableCredits
          originalMoney
        }
      }
    `;

    const res = await request(app)
      .post("/graphql")
      .send({ query: mutation });

    expect(res.status).toBe(200);
    expect(res.body.data.createCreditAccountWithPayment.email).toBe("gift@test.dk");
    expect(res.body.data.createCreditAccountWithPayment.type).toBe("GIFT_CARD");
  });

  it("should create a PrepaidCard and PaymentDetails", async () => {
    const mutation = `
      mutation {
        createCreditAccountWithPayment(input: {
          account: {
            type: PREPAID_CARD
            email: "prepaid@test.dk"
            treatmentCount: 5
            pricePerTreatment: 100
          }
          payment: {
            amountMoney: 500
            paymentMethod: MOBILEPAY
            reference: "PREPAID-ORDER-1"
          }
        }) {
          creditCode
          type
          email
          availableMoney
          ... on PrepaidAccount{
          treatmentCount}
        }
      }
    `;

    const res = await request(app)
      .post("/graphql")
      .send({ query: mutation });

    expect(res.status).toBe(200);
    expect(res.body.data.createCreditAccountWithPayment.email).toBe("prepaid@test.dk");
    expect(res.body.data.createCreditAccountWithPayment.type).toBe("PREPAID_CARD");
    expect(res.body.data.createCreditAccountWithPayment.treatmentCount).toBe(5);
  });
});
