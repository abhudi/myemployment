"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useToken } from "@/store/hooks/auth";

type DecodedToken = {
  onboard: string;
  role: string;
};

export function useOnboardingGuard(
  onboardingState: boolean,
  redirectPath: string,
) {
  const router = useRouter();
  const token = useToken();

  useEffect(() => {
    if (token) {
      const { onboard, role } = jwtDecode<DecodedToken>(token);
      if (onboardingState.toString().toLowerCase() == onboard.toLowerCase()) {
        router.replace(
          role === "employee"
            ? redirectPath
            : "/auth/onboarding/address-details",
        );
      }
    }
  }, [router, token]);
}
