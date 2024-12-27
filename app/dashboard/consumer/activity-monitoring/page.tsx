import type { Metadata } from "next";

import ActivityMonitoringPage from "@/containers/DashboardPage/ConsumerPage/ActivityMonitoringPage";

export const metadata: Metadata = {
  title: "Activity Monitoring | MyEmployment",
};

export default function ActivityMonitoringPageContainer() {
  return <ActivityMonitoringPage />;
}
