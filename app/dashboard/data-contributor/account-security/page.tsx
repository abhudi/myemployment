import type { Metadata } from "next";

import AccountSecurityPage from "@/containers/DashboardPage/CommonPage/AccountSecurityPage";

export const metadata: Metadata = {
  title: "Account Security | MyEmployment",
};

export default function AccountSecurityPageContainer() {
  return <AccountSecurityPage />;
}
