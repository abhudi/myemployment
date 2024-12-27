import type { Metadata } from "next";

import ManagementPage from "@/containers/DashboardPage/VerifierPage/ManagementPage";

export const metadata: Metadata = {
  title: "Management | MyEmployment",
};

export default function ManagementPageContainer() {
  return <ManagementPage />;
}
