const config = {
  preset: "ts-jest/presets/default-esm",
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

module.exports = config;
