import type { Metadata } from "next";

import ComplianceReportingPage from "@/containers/DashboardPage/DataContributorPage/ComplianceReportingPage";

export const metadata: Metadata = {
  title: "Compliance Reporting | MyEmployment",
};

export default function ComplianceReportingPageContainer() {
  return <ComplianceReportingPage />;
}
