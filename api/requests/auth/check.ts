import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { CheckAccountFormValues, CheckPhoneFormValue } from "@/api/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/check/`;

// == Check account existence == //
export async function requestCheckAccount(values: CheckAccountFormValues) {
  const { data } = await axios.post("", values, {
    baseURL,
  });

  return data;
}

export function useCheckAccount() {
  return useMutation({
    mutationFn: requestCheckAccount,
  });
}
const userBaseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/user/check/`;
// == Check phone existence == //
export async function requestCheckPhone(value: CheckPhoneFormValue) {
  const { data } = await axios.post("phone/", value, {
    baseURL:userBaseURL,
  });

  return data;
}

export function useCheckPhone() {
  return useMutation({
    mutationFn: requestCheckPhone,
  });
}
