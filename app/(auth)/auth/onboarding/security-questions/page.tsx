import SecurityQuestionsPage from "@/containers/AuthPage/OnboardingPage/SecurityQuestionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Questions | MyEmployment",
};

export default function SecurityQuestionsPageContainer() {
  return <SecurityQuestionsPage />;
}
