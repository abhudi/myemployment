export type VerifyEmailFormValues = {
  mfa_token?: string;
  otp: string;
};

export type SendEmailFormWithMFATokenValues = {
  mfa_token: string;
};


export type ResetPasswordFormValues={
  email:string|null;
  token:string|null;
  newPassword:string|null;
}