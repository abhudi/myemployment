import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function Hero() {
  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="w-full flex-col relative h-full items-center rounded-t-card rounded-br-card bg-blue400 md:bg-white py-8 md:py-0 z-20">
        <img
          draggable={false}
          src="/assets/img/home/oldHome-1/hero/bg.png"
          alt=""
          className="hidden md:block"
        />

        <img
          draggable={false}
          src="/assets/img/home/oldHome-1/hero/img.png"
          alt=""
          className="block md:hidden w-4/5 sm:w-3/5 mb-8 md:mb-0"
        />

        <FlexBox className="flex-col items-center md:items-start text-white flex md:absolute top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 left-0 md:left-12 xl:left-20 gap-5 2xl:gap-8">
          <FlexBox className="flex-col gap-1 lg:gap-2 xl:gap-4">
            <Typography className="text-center md:text-start text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-bold">
              Ethical Employment
            </Typography>
            <Typography className="text-center md:text-start text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-bold">
              Verifications With
            </Typography>
            <Typography className="text-center md:text-start text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-bold">
              Built-in Consumer
            </Typography>
            <Typography className="text-center md:text-start text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-bold">
              Privacy Protection
            </Typography>
          </FlexBox>
          <Typography className="text-center md:text-start text-sm lg:text-lg 2xl:text-xl font-aeonik-light max-w-60 sm:max-w-72 2xl:max-w-[500px]">
            Search here to see if your Data Contributor is reselling your data
            to 3rd parties
          </Typography>
          <Button
            variant="contained"
            className="rounded-card bg-blue150 min-w-24 shadow-none py-2 lg:py-3 2xl:py-4 ps-3 lg:ps-5 pe-6 lg:pe-10 gap-1 lg:gap-4 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
            startIcon={
              <img
                draggable={false}
                src="/assets/img/home/common/btn-logo.png"
                alt=""
              />
            }
          >
            Free Data Contributor Search
          </Button>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
