import type { Metadata } from "next";

import SolutionsPage from "@/containers/HomePage/SolutionsPage";

export const metadata: Metadata = {
  title: "Solutions | MyEmployment",
};

export default function SolutionsPageContainer() {
  return <SolutionsPage />;
}
