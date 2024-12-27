import type { Metadata } from "next";

import MyEmploymentUsersPage from "@/containers/DashboardPage/AdminPage/MyEmploymentUsersPage";

export const metadata: Metadata = {
  title: "My Employment Users | MyEmployment",
};

export default function PricingPageContainer() {
  return <MyEmploymentUsersPage />;
}
