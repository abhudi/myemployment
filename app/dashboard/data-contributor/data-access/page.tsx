import type { Metadata } from "next";

import DataAccessPage from "@/containers/DashboardPage/DataContributorPage/DataAccessPage";

export const metadata: Metadata = {
  title: "Data Access | MyEmployment",
};

export default function DataAccessPageContainer() {
  return <DataAccessPage />;
}
