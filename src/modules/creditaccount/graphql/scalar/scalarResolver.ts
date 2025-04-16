//src/modules/creditaccount/graphql/scalar/scalarResolver.ts
import { GraphQLScalarType, Kind } from "graphql";

export const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Custom scalar for ISO 8601 date strings",
  serialize(value: unknown) {
    return new Date(value as string | number | Date).toISOString();
  },
  parseValue(value: unknown) {
    return new Date(value as string);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});
