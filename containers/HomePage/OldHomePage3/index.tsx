import FlexBox from "@/components/Common/FlexBox";
import Banner from "@/components/HomePage/OldHomePage3/Banner";
import BlogPosts from "@/components/HomePage/OldHomePage3/BlogPosts";
import GetStarted from "@/components/HomePage/OldHomePage3/GetStarted";
import HowCanHelp from "@/components/HomePage/OldHomePage3/HowCanHelp";
import Legal from "@/components/HomePage/OldHomePage3/Legal";
import WhatWeDo from "@/components/HomePage/OldHomePage3/WhatWeDo";
import WhoWeAre from "@/components/HomePage/OldHomePage3/WhoWeAre";
import WhyChooseUs from "@/components/HomePage/OldHomePage3/WhyChooseUs";

export default function OldHomePage3() {
  return (
    <FlexBox className="flex-col mx-auto max-w-desktop bg-white">
      <Banner />
      <WhatWeDo />
      <WhoWeAre />
      <Legal />
      <HowCanHelp />
      <WhyChooseUs />
      <GetStarted />
      <BlogPosts />
    </FlexBox>
  );
}
