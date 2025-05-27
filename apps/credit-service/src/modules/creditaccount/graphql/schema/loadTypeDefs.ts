import { gql } from "graphql-tag";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function loadTypeDefs() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return gql(fs.readFileSync(path.join(__dirname, "./typeDefs.gql"), "utf8"));
}
