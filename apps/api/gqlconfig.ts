
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    "src/graphql/baseSchema.gql",
    "src/modules/shared/typeDefs/enums.gql",
    "src/modules/creditaccount/graphql/schema/account/typeDefs.gql",
    "src/modules/paymentdetails/graphql/schema/typeDefs.gql",
  ],
  generates: {
    'src/shared/types/codegen.types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
