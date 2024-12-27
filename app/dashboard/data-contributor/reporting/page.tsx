import type { Metadata } from "next";

import ReportingPage from "@/containers/DashboardPage/DataContributorPage/ReportingPage";

export const metadata: Metadata = {
  title: "Reporting | MyEmployment",
};

export default function ReportingPageContainer() {
  return <ReportingPage />;
}
