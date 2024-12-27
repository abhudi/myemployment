import type { Metadata } from "next";

import HomePage from "@/containers/HomePage";

export const metadata: Metadata = {
  title: "Home | MyEmployment",
};

export default function HomePageContainer() {
  return <HomePage />;
}
