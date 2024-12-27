import type { Metadata } from "next";

import DashboardPage from "@/containers/DashboardPage";

export const metadata: Metadata = {
  title: "Dashboard | MyEmployment",
};

export default function DashboardPageContainer() {
  return <DashboardPage />;
}
