import type { Metadata } from "next";

import ConsumerPage from "@/containers/DashboardPage/ConsumerPage";

export const metadata: Metadata = {
  title: "Consumer | MyEmployment",
};

export default function ConsumerPageContainer() {
  return <ConsumerPage />;
}
