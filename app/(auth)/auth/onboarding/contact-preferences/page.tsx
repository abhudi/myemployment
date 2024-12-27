import type { Metadata } from "next";

import ContactPreferencesPage from "@/containers/AuthPage/OnboardingPage/ContactPreferencesPage";

export const metadata: Metadata = {
  title: "Contact Preferences | MyEmployment",
};

export default function ContactPreferencesPageContainer() {
  return <ContactPreferencesPage />;
}
