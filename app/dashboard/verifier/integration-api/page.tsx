import type { Metadata } from "next";

import IntegrationAndApiPage from "@/containers/DashboardPage/VerifierPage/IntegrationAndApiPage";

export const metadata: Metadata = {
  title: "Integration and API | MyEmployment",
};

export default function IntegrationAPIPageContainer() {
  return <IntegrationAndApiPage />;
}
