export function maskGenerics(inputValue: string) {
  const lastFourDigits = inputValue.slice(-4);

  const maskedPart = "*".repeat(7);

  return `${maskedPart}${lastFourDigits}`;
}
