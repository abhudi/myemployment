"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useMfaMethods } from "@/api/requests/auth/mfaMethod";
import { useToken } from "@/store/hooks/auth";

type DecodedToken = {
  mfa_verified: boolean;
  onboard: boolean;
};

export function useMFAGuard(
  loginPath: string,
  onboardingPath: string,
  dashboardPath: string,
) {
  const router = useRouter();
  const token = useToken();
  const {
    data: mfaMethods,
    refetch,
    isLoading,
  } = useMfaMethods({
    enabled: false,
  });

  useEffect(() => {
    if (token) {
      const { mfa_verified, onboard } = jwtDecode<DecodedToken>(token);
      refetch();
      if (!onboard) {
        router.replace(onboardingPath);
      } else if (!mfa_verified) {
        if (!isLoading && mfaMethods?.available_mfa_methods.length === 0) {
          router.replace(dashboardPath);
        } else {
          router.replace(loginPath);
        }
      } else {
        router.replace(dashboardPath);
      }
    }
  }, [router, token, mfaMethods]);
}
