/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	setupFiles: ["<rootDir>/jest.setup.ts"],
	globals: {
		NODE_ENV: "test",
	},
};
