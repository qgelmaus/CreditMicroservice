//src/modules/creditaccount/graphql/scalar/scalarResolver.ts
import { GraphQLError, GraphQLScalarType, Kind } from "graphql";

export const DateScalar = new GraphQLScalarType({
	name: "Date",
	description: "Custom scalar for ISO 8601 date strings",
	serialize(value: unknown) {
		return new Date(value as string | number | Date).toISOString();
	},
	parseValue(value: unknown) {
		return new Date(value as string);
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.STRING) {
			return new Date(ast.value);
		}
		return null;
	},
});

export const EmailAddressScalar = new GraphQLScalarType({
	name: "EmailAddress",
	description: "A valid email address",
	serialize(value) {
		return value;
	},
	parseValue(value) {
		if (
			typeof value !== "string" ||
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
		) {
			throw new GraphQLError("Invalid email address format");
		}
		return value;
	},
	parseLiteral(ast) {
		if (
			ast.kind === Kind.STRING &&
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ast.value)
		) {
			return ast.value;
		}
		throw new GraphQLError("EmailAddress must be a valid string format");
	},
});

export const PositiveIntScalar = new GraphQLScalarType({
	name: "PositiveInt",
	description: "A positive whole number greater than 0",
	serialize(value) {
		return value;
	},
	parseValue(value) {
		if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
			throw new GraphQLError("Value must be a positive integer");
		}
		return value;
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			const intValue = Number.parseInt(ast.value, 10);
			if (intValue > 0) return intValue;
		}
		throw new GraphQLError("PositiveInt must be a positive integer");
	},
});
