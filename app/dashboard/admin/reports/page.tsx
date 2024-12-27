import type { Metadata } from "next";

import ReportsPage from "@/containers/DashboardPage/AdminPage/ReportsPage";

export const metadata: Metadata = {
  title: "Reports | MyEmployment",
};

export default function ReportsPageContainer() {
  return <ReportsPage />;
}
