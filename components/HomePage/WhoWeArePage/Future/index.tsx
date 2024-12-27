import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function Future() {
  return (
    <Container className="w-11/12 max-w-container my-14 md:my-28">
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
            MyEmployment&apos;s Future
          </Typography>
          <Typography className="text-center md:text-start text-sm lg:text-lg 2xl:text-2xl font-aeonik-light max-w-60 sm:max-w-80 2xl:max-w-[700px]">
            MyEmployment plans to integrate with property management and
            background screening companies in the future. By expanding its
            network of integrations, MyEmployment will be able to provide even
            more comprehensive and efficient verification services.
          </Typography>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
