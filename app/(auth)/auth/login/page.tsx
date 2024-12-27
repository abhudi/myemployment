import type { Metadata } from "next";

import LoginPage from "@/containers/AuthPage/LoginPage";

export const metadata: Metadata = {
  title: "Login | MyEmployment",
};

export default function LoginPageContainer() {
  return <LoginPage />;
}
