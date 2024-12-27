import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { OnboardingFormValues } from "@/api/types";
import { AuthState } from "@/store/types/auth";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/user/onboarding/`;

// == Onboarding == //
export async function requestOnboarding(values: OnboardingFormValues) {
  const { data } = await axios.post<AuthState>("", values, {
    baseURL,
  });

  return data;
}

export function useUserOnboarding() {
  return useMutation({
    mutationFn: requestOnboarding,
  });
}
