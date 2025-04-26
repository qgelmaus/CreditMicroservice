import type { ICreditAccountFlowDetails } from "../../../app/dto/creditaccount.types";

type CreditAccountType = "GIFT_CARD" | "PREPAID_CARD";

type FlowState =
  | "start"
  | "typeSelected"
  | "emailSet"
  | "detailsSet"
  | "validated";

interface FlowContext {
  type?: CreditAccountType;
  email?: string;
  details?: Record<string, ICreditAccountFlowDetails>;
}

export class CustomerCreditAccountFlow {
  private state: FlowState = "start";
  private context: FlowContext = {};

  getCurrentState(): FlowState {
    return this.state;
  }

  getContext(): FlowContext {
    return this.context;
  }

  selectType(type: CreditAccountType) {
    if (this.state !== "start") {
      throw new Error("Type must be selected from start state");
    }

    this.context.type = type;
    this.state = "typeSelected";
  }

  setEmail(email: string) {
    if (this.state !== "typeSelected") {
      throw new Error("Email must be set after type is selected");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }

    this.context.email = email;
    this.state = "emailSet";
  }

  setDetails(details: Record<string, ICreditAccountFlowDetails>) {
    if (this.state !== "emailSet") {
      throw new Error("Details must be set after email");
    }

    if (this.context.type === "GIFT_CARD") {
      if (!details.amount || typeof details.amount !== "number") {
        throw new Error("Missing or invalid amount for gift card");
      }
    }

    if (this.context.type === "PREPAID_CARD") {
      if (
        !details.treatmentCount ||
        !details.pricePerTreatment ||
        typeof details.treatmentCount !== "number" ||
        typeof details.pricePerTreatment !== "number"
      ) {
        throw new Error("Missing or invalid fields for prepaid card");
      }
    }

    this.context.details = details;
    this.state = "detailsSet";
  }

  validate() {
    if (this.state !== "detailsSet") {
      throw new Error("Details must be set before validation");
    }

    //  yderligere domænevalidering ?????
    this.state = "validated";
  }

  finalize() {
    if (this.state !== "validated") {
      throw new Error("You must validate before finalizing");
    }
    if (!this) throw new Error("Something went wrong");

    return {
      type: this.context.type,
      email: this.context.email,
      details: this.context.details,
    };
  }
}
