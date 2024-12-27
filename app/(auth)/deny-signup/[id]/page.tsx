import type { Metadata } from "next";

import DenySignUpPage from "@/containers/AuthPage/DenySignUpPage";

export const metadata: Metadata = {
  title: "Deny Signup | MyEmployment",
};

export default function DenySignUpPageContainer() {
  return <DenySignUpPage />;
}
