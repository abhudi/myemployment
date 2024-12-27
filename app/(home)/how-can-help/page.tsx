import type { Metadata } from "next";

import HowCanHelpPage from "@/containers/HomePage/HowCanHelpPage";

export const metadata: Metadata = {
  title: "How We Can Help | MyEmployment",
};

export default function HowCanHelpPageContainer() {
  return <HowCanHelpPage />;
}
