import type { Metadata } from "next";

import AddressDetailsPage from "@/containers/AuthPage/OnboardingPage/AddressDetailsPage";

export const metadata: Metadata = {
  title: "Address Details | MyEmployment",
};

export default function AddressDetailsPageContainer() {
  return <AddressDetailsPage />;
}
