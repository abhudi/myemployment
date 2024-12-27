"use client";

import { PropsWithChildren } from "react";

import { OnboardingHeader } from "@/components/Common/Header";
import { useAuthGuard, useVerificationGuard } from "@/hooks";
import OnboardingProvider from "@/providers/OnboardingProvider";

export default function OnboardingLayout({ children }: PropsWithChildren) {
  useAuthGuard(false, "/auth/login");
  useVerificationGuard(true, false, "/auth/onboarding/contact-verification");

  return (
    <>
      <OnboardingHeader />
      <OnboardingProvider>{children}</OnboardingProvider>
    </>
  );
}
