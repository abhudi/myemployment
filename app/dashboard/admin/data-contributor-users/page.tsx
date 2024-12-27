import type { Metadata } from "next";

import DataContributorUsersPage from "@/containers/DashboardPage/AdminPage/DataContributorUsersPage";

export const metadata: Metadata = {
  title: "Data Contributor Users | MyEmployment",
};

export default function PricingPageContainer() {
  return <DataContributorUsersPage />;
}
