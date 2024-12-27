import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { OtpLoginFormValues, OtpSetUpFormValues } from "@/api/types";
import { OtpSecret } from "@/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/otp-verification/`;

// == Create OTP == //
export async function requestCreateOTP() {
  const { data } = await axios.post<OtpSecret>("create_secret/", null, {
    baseURL,
  });

  return data;
}

export function useCreateOTP() {
  return useMutation({
    mutationFn: requestCreateOTP,
  });
}

// == Verify OTP == //
export async function requestVerifyOTP(values: OtpSetUpFormValues) {
  return await axios.post("verify_setup/", values, {
    baseURL,
  });
}

export function useVerifyOTP() {
  return useMutation({
    mutationFn: requestVerifyOTP,
  });
}

// == Login via OTP == //
export async function requestLoginOTP(values: OtpLoginFormValues) {
  return await axios.post("verify_login/", values, {
    baseURL,
  });
}

export function useLoginOTP() {
  return useMutation({
    mutationFn: requestLoginOTP,
  });
}
