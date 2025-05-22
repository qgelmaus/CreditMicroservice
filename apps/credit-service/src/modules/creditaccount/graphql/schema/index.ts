import {
  creditAccountResolver,
  flowResolvers,
} from "../../app/resolvers/index.ts";
import type { Resolvers } from "../../../../shared/types/codegen.types.ts";

export async function loadCreditAccountModule() {
  let typeDefs;

  if (process.env.NODE_ENV === "test") {
    const { loadTypeDefsForTest } = await import("./loadTypeDefsForTest.ts");
    typeDefs = loadTypeDefsForTest();
  } else {
    const { loadTypeDefs } = await import("./loadTypeDefs.ts");
    typeDefs = loadTypeDefs();
  }

  return {
    typeDefs,
    resolvers: {
      Mutation: {
        ...creditAccountResolver.Mutation,
        ...flowResolvers.Mutation,
      },
      Query: {
        ...creditAccountResolver.Query,
      },
      CreditAccount: creditAccountResolver.CreditAccount ?? {},
    } as Resolvers,
  };
}
