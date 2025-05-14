import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/modules/creditaccount/graphql/schema/typeDefs.gql",
  generates: {
    "src/shared/types/codegen.types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../../context/buildContext#Context",
      },
    },
  },
  overwrite: true,
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;
