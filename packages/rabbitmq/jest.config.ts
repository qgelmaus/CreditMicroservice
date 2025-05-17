import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testRegex: ".*\\.test\\.ts$",
};

export default config;
