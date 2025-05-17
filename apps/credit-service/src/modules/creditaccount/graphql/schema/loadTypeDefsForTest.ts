import { gql } from "graphql-tag";
import fs from "node:fs";
import path from "node:path";

export function loadTypeDefsForTest() {
  return gql(
    fs.readFileSync(
      path.resolve("src/modules/creditaccount/graphql/schema/typeDefs.gql"),
      "utf8"
    )
  );
}
