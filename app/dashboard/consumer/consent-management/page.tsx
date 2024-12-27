import type { Metadata } from "next";

import ConsentManagementPage from "@/containers/DashboardPage/ConsumerPage/ConsentManagementPage";

export const metadata: Metadata = {
  title: "Consent Management | MyEmployment",
};

export default function ConsentManagementPageContainer() {
  return <ConsentManagementPage />;
}
