"use client";

import { PropsWithChildren } from "react";

import { RegisterFooter } from "@/components/Common/Footer";
import { RegisterHeader } from "@/components/Common/Header";
import RegisterProvider from "@/providers/RegisterProvider";

export default function RegisterLayout({ children }: PropsWithChildren) {
  return (
    <>
      <RegisterHeader />
      <RegisterProvider>{children}</RegisterProvider>
      <RegisterFooter />
    </>
  );
}
