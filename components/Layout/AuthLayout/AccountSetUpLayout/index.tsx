"use client";

import { PropsWithChildren } from "react";

import { LoginHeader } from "@/components/Common/Header/LoginHeader";

export default function AccountSetUpLayout({ children }: PropsWithChildren) {
  return (
    <>
      <LoginHeader />
      {children}
    </>
  );
}
