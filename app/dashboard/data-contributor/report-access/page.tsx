import type { Metadata } from "next";


import ReportLibraryForContributor from "@/components/DashboardPage/DataContributorPage/ReportAccessPage/ReportLibrary";

export const metadata: Metadata = {
  title: "Report Access | MyEmployment",
};

export default function ReportAccessPageContainer() {
  return <ReportLibraryForContributor />;
}
