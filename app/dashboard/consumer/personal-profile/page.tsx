import type { Metadata } from "next";

import PersonalProfilePage from "@/containers/DashboardPage/ConsumerPage/PersonalProfilePage";

export const metadata: Metadata = {
  title: "Personal Profile | MyEmployment",
};

export default function PersonalProfilePageContainer() {
  return <PersonalProfilePage />;
}
