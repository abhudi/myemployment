"use client";

import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { useToken } from "@/store/hooks/auth";

type DecodedToken = {
  onboard: boolean;
  mfa_verified: boolean;
};

export function useVerificationGuard(
  onboardingStatus: boolean,
  verificationState: boolean,
  redirectPath: string,
) {
  const router = useRouter();
  const pathname = usePathname();
  const token = useToken();

  useEffect(() => {
    if (token) {
      // const { onboard, phone_verified } = jwtDecode<DecodedToken>(token);
      const { onboard, mfa_verified } = jwtDecode<DecodedToken>(token);

      const shouldRedirect =
        onboard === onboardingStatus &&
        verificationState === mfa_verified &&
        pathname !== "/auth/onboarding/contact-preferences";

      if (shouldRedirect) {
        router.replace(redirectPath);
      }
    }
  }, [router, token]);
}
