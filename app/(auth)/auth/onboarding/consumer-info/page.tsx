import type { Metadata } from "next";

import ConsumerInfoPage from "@/containers/AuthPage/OnboardingPage/ConsumerInfoPage";

export const metadata: Metadata = {
  title: "Consumer Info | MyEmployment",
};

export default function ConsumerInfoPageContainer() {
  return <ConsumerInfoPage />;
}
