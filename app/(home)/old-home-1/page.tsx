import type { Metadata } from "next";

import OldHomePage1 from "@/containers/HomePage/OldHomePage1";

export const metadata: Metadata = {
  title: "Old Home 1 | MyEmployment",
};

export default function OldHomePage1Container() {
  return <OldHomePage1 />;
}
