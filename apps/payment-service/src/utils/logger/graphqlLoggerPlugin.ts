import type { ApolloServerPlugin } from "@apollo/server";

export const graphqlLoggerPlugin: ApolloServerPlugin = {
  async requestDidStart(requestContext) {
    const { request } = requestContext;
    const op = request.operationName || "Unnamed";
    const opType = request.query?.trim().split(" ")[0];
    console.log(`📥 [GraphQL] ${opType?.toUpperCase()}: ${op}`);
    if (request.variables && Object.keys(request.variables).length > 0) {
      console.log("Variables:", JSON.stringify(request.variables, null, 2));
    }
    console.log("–––––––––––––––––––––––––––––––––––––");
  },
};
