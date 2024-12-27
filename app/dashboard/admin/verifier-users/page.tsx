import type { Metadata } from "next";

import VerifierUsersPage from "@/containers/DashboardPage/AdminPage/VerifierUsersPage";

export const metadata: Metadata = {
  title: "Verifier Users | MyEmployment",
};

export default function PricingPageContainer() {
  return <VerifierUsersPage />;
}
