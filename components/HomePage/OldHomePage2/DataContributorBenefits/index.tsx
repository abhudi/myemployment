import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function DataContributorBenefits() {
  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="w-full flex-col relative h-full items-center rounded-t-card rounded-bl-card bg-blue400 md:bg-white py-8 md:py-0 z-20">
        <img
          draggable={false}
          src="/assets/img/home/oldHome-2/dataContributorBenefits/bg.png"
          alt=""
          className="hidden md:block"
        />

        <img
          draggable={false}
          src="/assets/img/home/oldHome-2/dataContributorBenefits/img.png"
          alt=""
          className="block md:hidden w-4/5 sm:w-3/5 mb-8 md:mb-0"
        />

        <FlexBox className="flex-col items-center md:items-start text-white flex md:absolute top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 right-4 xl:right-20 3xl:right-10 gap-5 2xl:gap-8">
          <Typography className="text-center md:text-start text-xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-bold">
            MyEmployment has your
            <br />
            back and so does your
            <br />
            Data Contributor, when
            <br />
            they work with us.
          </Typography>
          <Typography className="text-center md:text-start text-sm lg:text-lg 2xl:text-xl font-aeonik-light max-w-60 sm:max-w-80 2xl:max-w-[500px]">
            Don&apos; get too mad at your Data Contributor, they may not know.
            By searching for your Data Contributor in our database you can
            inform them and help out your fellow Consumers. We will never share
            your data to any 3rd party, that&apos;s the MyEmployment guarantee.
          </Typography>
          <Button
            variant="contained"
            className="rounded-card bg-blue150 min-w-24 shadow-none py-1.5 lg:py-3 2xl:py-4 px-5 lg:px-10 2xl:px-14 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
          >
            Check Here
          </Button>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
