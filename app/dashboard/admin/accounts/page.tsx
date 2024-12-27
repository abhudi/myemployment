import type { Metadata } from "next";

import AccountsPage from "@/containers/DashboardPage/AdminPage/AccountsPage";

export const metadata: Metadata = {
  title: "Accounts | MyEmployment",
};

export default function AccountsPageContainer() {
  return <AccountsPage />;
}
