import type { Metadata } from "next";

import ReportAccessPage from "@/containers/DashboardPage/VerifierPage/ReportAccessPage";

export const metadata: Metadata = {
  title: "Report Access | MyEmployment",
};

export default function ReportAccessPageContainer() {
  return <ReportAccessPage />;
}
