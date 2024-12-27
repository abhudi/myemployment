import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { RegisterFormValues } from "@/api/types";
import { CommonDropdownValues } from "@/api/types/CommonDropdownValues";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/register/verifier/`;

// == Verifier register == //
export async function requestRegisterVerifier(values: RegisterFormValues) {
  return await axios.post("", values, {
    baseURL,
  });
}

export function useRegisterVerifier() {
  return useMutation({
    mutationFn: requestRegisterVerifier,
  });
}



const myEmploymentBaseURL = `${process.env.NEXT_PUBLIC_MY_EMPLOYMENT_BASE_API_URL}/Organization/`;

// == Verifier register == //
export async function requestVerifierAgencyTypes() {
  return await axios.get<CommonDropdownValues[]>("get-verifier-agency-types", {
    baseURL:myEmploymentBaseURL,
  });
}

export function useRequestVerifierAgencyTypes() {
  return useMutation({
    mutationFn: requestVerifierAgencyTypes,
  });
}


