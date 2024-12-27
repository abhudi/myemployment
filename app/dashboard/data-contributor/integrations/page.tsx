import type { Metadata } from "next";

import IntegrationsPage from "@/containers/DashboardPage/DataContributorPage/IntegrationsPage";

export const metadata: Metadata = {
  title: "Integrations | MyEmployment",
};

export default function IntegrationsPageContainer() {
  return <IntegrationsPage />;
}
