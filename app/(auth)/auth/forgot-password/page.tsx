import ForgotPasswordPage from "@/containers/AuthPage/ForgotPasswordPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Forgot Password | MyEmployment",
};

export default function ForgotPasswordPageContainer() {
  return <ForgotPasswordPage />;
}
