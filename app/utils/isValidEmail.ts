export function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;

  email = email.trim();
  if (email.length === 0 || email.length > 254) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
