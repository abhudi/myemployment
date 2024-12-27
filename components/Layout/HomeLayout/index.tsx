"use client";

import { PropsWithChildren } from "react";

import { HomeHeader } from "@/components/Common/Header";
import CallToAction from "@/components/HomePage/RootPage/CallToAction";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HomeHeader />
      {children}
      <CallToAction />
    </>
  );
}
