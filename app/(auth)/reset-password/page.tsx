import ResetPasswordPage from "@/containers/AuthPage/ResetPasswordPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | MyEmployment",
};

export default function ResetPasswordPageContainer() {
  return <ResetPasswordPage />;
}
