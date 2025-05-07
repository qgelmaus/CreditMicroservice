import { CustomerCreditAccountFlow } from "../../modules/creditaccount/domain/flows/creditaccount/customerFlow";

describe("CustomerCreditAccountFlow", () => {
  it("kan gennemføre et komplet flow for gift card", () => {
    const flow = new CustomerCreditAccountFlow();

    flow.selectType("GIFT_CARD");
    expect(flow.getCurrentState()).toBe("typeSelected");

    flow.setEmail("test@example.com");
    expect(flow.getCurrentState()).toBe("emailSet");

    flow.setDetails({ amount: 500 });
    expect(flow.getCurrentState()).toBe("detailsSet");

    flow.validate();
    expect(flow.getCurrentState()).toBe("validated");

    const result = flow.finalize();
    expect(result).toEqual({
      type: "GIFT_CARD",
      email: "test@example.com",
      details: { amount: 500 },
    });
  });

  it("kan gennemføre et flow for prepaid card", () => {
    const flow = new CustomerCreditAccountFlow();

    flow.selectType("PREPAID_CARD");
    flow.setEmail("prepaid@example.com");
    flow.setDetails({ treatmentCount: 10, pricePerTreatment: 75 });
    flow.validate();

    const result = flow.finalize();
    expect(result).toEqual({
      type: "PREPAID_CARD",
      email: "prepaid@example.com",
      details: {
        treatmentCount: 10,
        pricePerTreatment: 75,
      },
    });
  });

  it("kaster fejl ved ugyldig rækkefølge", () => {
    const flow = new CustomerCreditAccountFlow();

    expect(() => flow.setEmail("hej@fejl.dk")).toThrow(
      "Email must be set after type is selected"
    );
    flow.selectType("GIFT_CARD");
    expect(() => flow.setDetails({ amount: 500 })).toThrow(
      "Details must be set after email"
    );
  });

  it("kaster fejl hvis validering mangler", () => {
    const flow = new CustomerCreditAccountFlow();

    flow.selectType("GIFT_CARD");
    flow.setEmail("test@example.com");
    flow.setDetails({ amount: 500 });

    expect(() => flow.finalize()).toThrow(
      "You must validate before finalizing"
    );
  });
});
