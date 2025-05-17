// apps/credit-service/jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm", // 👈 vigtigt: ESM preset
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }],
  },

  extensionsToTreatAsEsm: [".ts"],
  setupFiles: ["@hovedopgave2025/test-utils/dist/jest.setup.js"],
  moduleNameMapper: {
    "^apps/(.*)$": "<rootDir>/../../apps/$1",
    "^packages/(.*)$": "<rootDir>/../../packages/$1",
  },
  testRegex: ".*\\.test\\.ts$",
  moduleFileExtensions: ["ts", "js", "json"],
};

export default config;
