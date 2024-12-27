import type { Metadata } from "next";

import ComplianceCenterPage from "@/containers/DashboardPage/VerifierPage/ComplianceCenterPage";

export const metadata: Metadata = {
  title: "Compliance Center | MyEmployment",
};

export default function ComplianceCenterPageContainer() {
  return <ComplianceCenterPage />;
}
