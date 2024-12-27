import type { Metadata } from "next";

import SupportPage from "@/containers/DashboardPage/ConsumerPage/SupportPage";

export const metadata: Metadata = {
  title: "Support | MyEmployment",
};

export default function SupportPageContainer() {
  return <SupportPage />;
}
