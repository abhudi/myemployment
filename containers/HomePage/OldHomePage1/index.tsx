import DataContributorLookUp from "@/components/HomePage/OldHomePage1/DataContributorLookUp";
import DataContributorSearch from "@/components/HomePage/OldHomePage1/DataContributorSearch";
import Hero from "@/components/HomePage/OldHomePage1/Hero";
import Promises from "@/components/HomePage/OldHomePage1/Promises";
import Testimonials from "@/components/HomePage/OldHomePage1/Testimonials";
import WhyChooseUs from "@/components/HomePage/OldHomePage1/WhyChooseUs";

export default function OldHomePage1() {
  return (
    <>
      <Hero />
      <DataContributorLookUp />
      <DataContributorSearch />
      <Promises />
      <Testimonials />
      <WhyChooseUs />
    </>
  );
}
