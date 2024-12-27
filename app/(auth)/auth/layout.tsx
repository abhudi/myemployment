"use client";

import { useSearchParams } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import toast from "react-hot-toast";

import { normalize } from "@/utils/message";

export default function AuthLayout({ children }: PropsWithChildren) {
  const searchParams = useSearchParams();

  const msg = searchParams.get("message");

  useEffect(() => {
    if (msg) {
      toast.error(normalize(msg));
    }
  }, [searchParams]);

  return <>{children}</>;
}
