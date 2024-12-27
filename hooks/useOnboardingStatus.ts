"use client";

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import { useToken } from "@/store/hooks/auth";

type DecodedToken = {
  onboard: string;
};

export function useOnboardingStatus() {
  const token = useToken();
  const [onboard, setOnboard] = useState<boolean | null>(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token);
      setOnboard(decoded.onboard.toLowerCase()==="true");
    }
  }, [token]);
  return onboard;
}
