export function maskEmail(email: string) {
  const [localPart, domain] = email.split("@");

  if (localPart.length <= 1) {
    return `${localPart}@${domain}`;
  }

  const maskedLocalPart =
    localPart[0] + "****" + localPart[localPart.length - 1];

  return `${maskedLocalPart}@${domain}`;
}
