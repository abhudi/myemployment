import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function HowDoWeStop() {
  return (
    <Container className="w-11/12 justify-center max-w-container mb-10 md:mb-20">
      <FlexBox className="w-full relative justify-center rounded-t-card rounded-bl-card bg-blue400 md:bg-transparent py-10 md:py-0">
        <img
          draggable={false}
          src="/assets/img/home/home-2/howDoWeStop/bg.png"
          alt=""
          className="hidden md:block"
        />

        <FlexBox className="w-11/12 justify-center lg:w-4/5 text-white flex md:absolute top-1/2 -translate-y-0 md:-translate-y-1/2 left-1/2 -translate-x-0 md:-translate-x-1/2">
          <Typography className="text-center text-2xl sm:text-4xl md:text-5xl 3xl:text-6xl font-aeonik-bold">
            How do <span className="relative cross-mark px-2 sm:px-4">I</span>{" "}
            We Stop this?
          </Typography>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
