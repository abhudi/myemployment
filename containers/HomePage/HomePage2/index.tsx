import DataContributorSearch from "@/components/HomePage/HomePage2/DataContributorSearch";
import DataContributorSupport from "@/components/HomePage/HomePage2/DataContributorSupport";
import FAQ from "@/components/HomePage/HomePage2/FAQ";
import HowDoIStop from "@/components/HomePage/HomePage2/HowDoIStop";
import HowDoWeStop from "@/components/HomePage/HomePage2/HowDoWeStop";
import ShareOnMail from "@/components/HomePage/HomePage2/ShareOnMail";
import ShareOnSocial from "@/components/HomePage/HomePage2/ShareOnSocial";
import TakeAction from "@/components/HomePage/HomePage2/TakeAction";
import Testimonials from "@/components/HomePage/OldHomePage1/Testimonials";

export default function HomePage2() {
  return (
    <>
      <DataContributorSearch />
      <HowDoIStop />
      <ShareOnSocial />
      <ShareOnMail />
      <HowDoWeStop />
      <FAQ />
      <TakeAction />
      <Testimonials />
      <DataContributorSupport />
    </>
  );
}
