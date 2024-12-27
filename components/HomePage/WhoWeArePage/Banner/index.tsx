import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function Banner() {
  return (
    <Container className="w-11/12 max-w-container mb-14 md:mb-28">
      <FlexBox className="w-full flex-col relative h-full items-center rounded-t-card rounded-bl-card bg-blue400 xl:bg-white pt-10 xl:pt-0 z-20">
        <img
          draggable={false}
          src="/assets/img/home/whoWeAre/banner/bg.png"
          alt=""
          className="hidden xl:block"
        />

        <FlexBox className="flex-col w-full items-center text-white flex xl:absolute top-10 lg:top-20 left-1/2 -translate-x-0 xl:-translate-x-1/2 gap-5 2xl:gap-8">
          <Typography className="text-center w-[97%] sm:w-11/12 lg:w-4/5 text-4xl sm:text-5xl 3xl:text-6xl font-aeonik-medium">
            Who We Are
          </Typography>

          <Typography className="text-blue150 text-center w-11/12 2xl:w-4/5 3xl:w-3/5 text-base sm:text-xl md:text-2xl 2xl:text-3xl">
            MyEmployment provides ethical employment verifications while
            protecting consumer privacy. The company prioritizes the security
            and integrity of employee data, ensuring that sensitive information
            is only accessed by authorized parties.
          </Typography>
        </FlexBox>

        <img
          draggable={false}
          src="/assets/img/home/whoWeAre/banner/bg-mobile.png"
          alt=""
          className="block xl:hidden"
        />
      </FlexBox>
    </Container>
  );
}
