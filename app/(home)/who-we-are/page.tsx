import type { Metadata } from "next";

import WhoWeArePage from "@/containers/HomePage/WhoWeArePage";

export const metadata: Metadata = {
  title: "Who We Are | MyEmployment",
};

export default function WhoWeArePageContainer() {
  return <WhoWeArePage />;
}
