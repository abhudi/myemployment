import type { Metadata } from "next";

import DataContributorPage from "@/containers/DashboardPage/DataContributorPage";

export const metadata: Metadata = {
  title: "Data Contributor | MyEmployment",
};

export default function DataContributorPageContainer() {
  return <DataContributorPage />;
}
