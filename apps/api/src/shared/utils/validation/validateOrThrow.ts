// src/utils/validateOrThrow.ts
import { type ZodSchema, ZodError } from "zod";
import { GraphQLError } from "graphql";

export function validateOrThrow<T>(schema: ZodSchema<T>, data: unknown): T {
	const result = schema.safeParse(data);
	if (!result.success) {
		throw new GraphQLError("Ugyldigt input", {
			extensions: {
				code: "BAD_USER_INPUT",
				issues: result.error.format(),
			},
		});
	}
	return result.data;
}
