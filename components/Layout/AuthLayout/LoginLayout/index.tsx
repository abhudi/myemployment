"use client";

import { PropsWithChildren } from "react";

import { LoginHeader } from "@/components/Common/Header/LoginHeader";
import { useMFAGuard, useVerificationGuard } from "@/hooks";

export default function LoginLayout({ children }: PropsWithChildren) {
  useMFAGuard("/auth/login", "/auth/onboarding/consumer-info", "/dashboard");
  useVerificationGuard(true, false, "/auth/onboarding/contact-verification");

  return (
    <>
      <LoginHeader />
      {children}
    </>
  );
}
