import type { Metadata } from "next";

import VerificationRequestPage from "@/containers/DashboardPage/VerifierPage/VerificationRequestPage";

export const metadata: Metadata = {
  title: "Verification Request | MyEmployment",
};

export default function VerificationRequestPageContainer() {
  return <VerificationRequestPage />;
}
