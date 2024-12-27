import { HomeHeader } from "@/components/Common/Header";
import CallToAction from "@/components/HomePage/RootPage/CallToAction";
import Commitments from "@/components/HomePage/RootPage/Commitments";
import ConsumerPrivacy from "@/components/HomePage/RootPage/ConsumerPrivacy";
import DidYouKnow from "@/components/HomePage/RootPage/DidYouKnow";
import Hero from "@/components/HomePage/RootPage/Hero";
import HowCanHelp from "@/components/HomePage/RootPage/HowCanHelp";
import WhyChooseUs from "@/components/HomePage/RootPage/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <Hero />
      <DidYouKnow />
      <ConsumerPrivacy />
      <Commitments />
      <HowCanHelp />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}
