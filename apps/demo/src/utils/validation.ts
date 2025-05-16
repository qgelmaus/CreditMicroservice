export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isPositiveNumber = (val: unknown) =>
  typeof val === "number" && val > 0;

export const isNonEmptyString = (val: unknown) =>
  typeof val === "string" && val.trim().length > 0;
