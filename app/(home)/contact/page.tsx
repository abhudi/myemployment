import type { Metadata } from "next";

import ContactPage from "@/containers/HomePage/Contact";

export const metadata: Metadata = {
  title: "Contact | MyEmployment",
};

export default function ContactContainer() {
  return <ContactPage />;
}
