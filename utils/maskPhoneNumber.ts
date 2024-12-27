export function maskPhoneNumber(phoneNumber: string) {
  const lastFourDigits = phoneNumber.slice(-4);

  const maskedPart = "*".repeat(7);

  return `${maskedPart}${lastFourDigits}`;
}
