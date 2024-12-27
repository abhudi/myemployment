"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useIsAuthenticated } from "@/store/hooks/auth";

export function useAuthGuard(authState: boolean, redirectPath: string) {
  const router = useRouter();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated == authState) {
      router.replace(redirectPath);
    }
  }, [isAuthenticated]);
}
