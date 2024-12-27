"use client";

import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { useToken } from "@/store/hooks/auth";

type DecodedToken = {
  role: string;
};

export function usePermissionGuard() {
  const router = useRouter();
  const pathName = usePathname();
  const token = useToken();

  useEffect(() => {
    if (token) {
      const { role } = jwtDecode<DecodedToken>(token);
      switch (role) {
        case "employee":
          if (!pathName.startsWith("/dashboard/consumer")) {
            router.push("/dashboard/consumer");
          }
          break;
        case "employer_admin":
          if (!pathName.startsWith("/dashboard/data-contributor")) {
            router.push("/dashboard/data-contributor");
          }
          break;
        case "employer_user":
            if (!pathName.startsWith("/dashboard/data-contributor")) {
              router.push("/dashboard/data-contributor");
            }
            break;
        case "verifier_admin":
          if (!pathName.startsWith("/dashboard/verifier")) {
            router.push("/dashboard/verifier");
          }
          break;
        case "verifier_user":
            if (!pathName.startsWith("/dashboard/verifier")) {
              router.push("/dashboard/verifier");
            }
            break;
        case "administrative":
          if (pathName === "/dashboard" || !pathName.startsWith("/dashboard")) {
            router.push("/dashboard/consumer");
          }
          break;
        case "management":
            if (pathName === "/dashboard" || !pathName.startsWith("/dashboard")) {
              router.push("/dashboard/consumer");
            }
            break;
      }
    }
  }, [token, pathName]);
}
