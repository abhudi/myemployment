import type { Metadata } from "next";

import VerifierPage from "@/containers/DashboardPage/VerifierPage";

export const metadata: Metadata = {
  title: "Verifier | MyEmployment",
};

export default function VerifierPageContainer() {
  return <VerifierPage />;
}
