import { creditAccountResolver } from "./resolvers";
import fs from "node:fs";
import path from "node:path";

const typeDefs = fs.readFileSync(path.join(__dirname, "typeDefs.gql"), "utf8");

export { creditAccountResolver, typeDefs };
