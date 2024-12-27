import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function ConsumerPrivacy() {
  return (
    <Container className="w-11/12 max-w-container mb-10 md:mb-20">
      <FlexBox className="w-full flex-col relative h-full items-center rounded-t-card rounded-bl-card bg-blue400 xl:bg-white pt-10 xl:pt-0 z-20">
        <img
          draggable={false}
          src="/assets/img/home/root/consumerPrivacy/bg.png"
          alt=""
          className="hidden xl:block"
        />

        <FlexBox className="flex-col w-full items-center text-white flex xl:absolute top-10 lg:top-20 left-1/2 -translate-x-0 xl:-translate-x-1/2 gap-5 2xl:gap-8">
          <Typography className="text-center w-[97%] sm:w-11/12 lg:w-4/5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-medium">
            Ethical employment verifications with Consumer privacy built in
          </Typography>

          <Typography className="text-blue150 text-center w-11/12 2xl:w-4/5 3xl:w-3/5 text-base sm:text-xl 2xl:text-2xl">
            Our platform provides accurate, ethical employment verifications
            with a commitment to Consumer. Our intention is not to upset Data
            Contributors or Consumers but tp educate and offer a
            straightforward, secure solution. We ensure sensitive information
            stys protected, allowing you to fulfill verification requests
            confidently while prioritizing transparency and compliance.
          </Typography>

          <Button
            variant="contained"
            className="rounded-card bg-blue150 min-w-24 shadow-none py-3 ps-2 sm:ps-3 lg:ps-5 pe-2 sm:pe-6 lg:pe-10 gap-0 sm:gap-1 lg:gap-4 font-bold text-sm sm:text-base lg:text-lg 2xl:text-xl text-start normal-case"
            startIcon={
              <img
                draggable={false}
                src="/assets/img/home/common/btn-logo.png"
                alt=""
                className="hidden sm:block"
              />
            }
          >
            Protect Consumer Privacy — Start Now
          </Button>
        </FlexBox>

        <img
          draggable={false}
          src="/assets/img/home/root/consumerPrivacy/bg-mobile.png"
          alt=""
          className="block xl:hidden"
        />
      </FlexBox>
    </Container>
  );
}
