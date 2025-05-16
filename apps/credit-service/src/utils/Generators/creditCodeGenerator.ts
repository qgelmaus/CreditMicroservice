export function generateCreditCode(): string {
  const randomDigits = Math.floor(1000000 + Math.random() * 900000);
  return `RR${randomDigits}`;
}
