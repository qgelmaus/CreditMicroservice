export function generateDateExpired(): Date {
  const now = new Date();
  now.setFullYear(now.getFullYear() + 3);
  return now;
}
