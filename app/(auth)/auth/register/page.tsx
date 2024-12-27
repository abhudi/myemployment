import type { Metadata } from "next";

import RegisterPage from "@/containers/AuthPage/RegisterPage";

export const metadata: Metadata = {
  title: "Register | MyEmployment",
};

export default function RegisterPageContainer() {
  return <RegisterPage />;
}
