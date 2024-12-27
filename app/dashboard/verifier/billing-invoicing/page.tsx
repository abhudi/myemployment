import type { Metadata } from "next";

import BillingAndInvocingPage from "@/containers/DashboardPage/VerifierPage/BillingAndInvocingPage";

export const metadata: Metadata = {
  title: "Billing and Invoicing | MyEmployment",
};

export default function BillingInvoicingPageContainer() {
  return <BillingAndInvocingPage />;
}
