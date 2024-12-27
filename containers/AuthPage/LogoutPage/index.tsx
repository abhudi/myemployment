"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

import { useLogout } from "@/store/hooks/auth";

export default function LogoutPage() {
  const logout = useLogout();
  const router = useRouter();
  const { slug } = useParams();
  const [message] = Array.from(slug || [""]);

  useEffect(() => {
    logout();
    router.replace(encodeURI(`/auth/login?message=${message}`));
  }, []);

  return <></>;
}
