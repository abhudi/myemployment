"use client";

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import { useToken } from "@/store/hooks/auth";

type DecodedToken = {
  role: string;
};

export function useRole() {
  const token = useToken();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token);
      if (decoded.role) {
        switch (decoded.role) {
          case "employee":
            setRole("consumer");
            break;
          case "employer_admin":
              setRole("dataContributor");
              break;
          case "employer_user":
            setRole("dataContributor");
            break;
          case "verifier_admin":
              setRole("verifier");
              break;
          case "verifier_user":
            setRole("verifier");
            break;
          case "administrative":
              setRole("admin");
              break;
          case "client_success":
                setRole("admin");
          break;
          case "management":
            setRole("admin");
          break;
          default:
            setRole("consumer");
        }
      }
    }
  }, [token]);
  return role;
}
