import type { Metadata } from "next";

import PendingApprovalsPage from "@/containers/DashboardPage/AdminPage/PendingApprovalsPage";

export const metadata: Metadata = {
  title: "Consumer Pending Approvals | MyEmployment",
};

export default function PricingPageContainer() {
  return <PendingApprovalsPage />;
}
