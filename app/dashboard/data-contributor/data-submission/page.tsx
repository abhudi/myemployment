import type { Metadata } from "next";

import DatSubmissionPage from "@/containers/DashboardPage/DataContributorPage/DataSubmissionPage";

export const metadata: Metadata = {
  title: "Data Submission | MyEmployment",
};

export default function DataSubmissionPageContainer() {
  return <DatSubmissionPage />;
}
