import type { Metadata } from "next";

import ContactVerificationPage from "@/containers/AuthPage/OnboardingPage/ContactVerification";

export const metadata: Metadata = {
  title: "Contact Verification | MyEmployment",
};

export default function ContactVerificationPageContainer() {
  return <ContactVerificationPage />;
}
