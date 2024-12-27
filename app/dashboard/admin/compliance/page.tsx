import type { Metadata } from "next";

import CompliancePage from "@/containers/DashboardPage/AdminPage/CompliancePage";

export const metadata: Metadata = {
  title: "Compliance | MyEmployment",
};

export default function CompliancePageContainer() {
  return <CompliancePage />;
}
