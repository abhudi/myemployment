import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import {
  SendCodeFormValues,
  VerifyEmailFormValues,
  VerifyOTPFormValues,
} from "@/api/types";
import { ResetPasswordFormValues, SendEmailFormWithMFATokenValues } from "@/api/types/VerifyEmailFormValues";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/`;

// == Send verification code == //
export async function requestSendCode(value: SendCodeFormValues) {
  const { data } = await axios.post("send-verification-code/", value, {
    baseURL,
  });

  return data;
}

export function useSendCode() {
  return useMutation({
    mutationFn: requestSendCode,
  });
}

// == Verify OTP == //
export async function requestVerifyOTP(values: VerifyOTPFormValues) {
  const { data } = await axios.post("verify-otp/", values, {
    baseURL,
  });

  return data;
}

export function useVerifyOTP() {
  return useMutation({
    mutationFn: requestVerifyOTP,
  });
}

// == Send email verification code == //
export async function requestSendEmailCode() {
  const { data } = await axios.post("email-verification/send/", null, {
    baseURL,
  });

  return data;
}

export function useSendEmailCode() {
  return useMutation({
    mutationFn: requestSendEmailCode,
  });
}

// == Verify email verification code == //
export async function requestVerifyEmailCode(values: VerifyEmailFormValues) {
  const { data } = await axios.post("email-verification/verify/", values, {
    baseURL,
  });

  return data;
}

export function useVerifyEmailCode() {
  return useMutation({
    mutationFn: requestVerifyEmailCode,
  });
}


// == Verify email verification code == //
export async function requestSendEmailCodeWithMFAToken(values: SendEmailFormWithMFATokenValues) {
  const { data } = await axios.post("email-verification/send-using-mfatoken/", values, {
    baseURL,
  });

  return data;
}

export function useSendEmailCodeWithMFAToken() {
  return useMutation({
    mutationFn: requestSendEmailCodeWithMFAToken,
  });
}

// == Verify email verification code == //
export async function requestVerifyEmailCodeWithMFAToken(values: VerifyEmailFormValues) {
  const { data } = await axios.post("email-verification/verify-using-mfatoken/", values, {
    baseURL,
  });

  return data;
}

export function useVerifyEmailCodeWithMFAToken() {
  return useMutation({
    mutationFn: requestVerifyEmailCodeWithMFAToken,
  });
}


// == Reset Password == //
export async function requestResetPassword(values: ResetPasswordFormValues) {
  const { data } = await axios.post("reset-password/", values, {
    baseURL,
  });

  return data;
}

export function useRequestResetPassword() {
  return useMutation({
    mutationFn: requestResetPassword,
  });
}