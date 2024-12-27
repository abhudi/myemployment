import type { Metadata } from "next";

import ApproveSignUpPage from "@/containers/AuthPage/ApproveSignUpPage";

export const metadata: Metadata = {
  title: "Approve Signup | MyEmployment",
};

export default function ApproveSignUpPageContainer() {
  return <ApproveSignUpPage />;
}
