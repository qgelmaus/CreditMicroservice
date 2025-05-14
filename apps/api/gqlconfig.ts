
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "src/**/*.gql",
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
