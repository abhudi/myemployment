import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function WhoWeAre() {
  return (
    <FlexBox className="w-full bg-blue500">
      <Container className="w-11/12 max-w-container">
        <FlexBox className="w-full flex-col xl:flex-row text-white justify-center items-center my-10 md:my-20 gap-10 md:gap-20">
          <img
            draggable={false}
            src="/assets/img/home/oldHome-3/whoWeAre/image.png"
            className="w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 3xl:w-min"
            alt=""
          />

          <FlexBox className="flex-col w-11/12 md:w-2/3 xl:w-2/5 3xl:w-1/3 items-center xl:items-start">
            <Typography className="text-xl md:text-2xl text-blue150 font-aeonik-bold py-4">
              Who we are
            </Typography>

            <Typography className="text-2xl sm:3xl md:text-4xl xl:text-5xl font-aeonik-bold text-center xl:text-start">
              Welcome to the MyEmployment
            </Typography>

            <FlexBox className="flex-col gap-4 my-5 md:my-10 w-full sm:w-11/12 md:w-10/12">
              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  Replace{" "}
                  <span className="font-aeonik-bold">
                    high - friction Process
                  </span>{" "}
                  with seamless workflows for a better customer experience.
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Gain Onboarding visibility
                  </span>{" "}
                  into your customers with unmatched data accuracy for more
                  informed decisioning
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  Bring Sophisticated product to{" "}
                  <span className="font-aeonik-bold">market faster</span>, with
                  fewer internal resources.
                </Typography>
              </FlexBox>
            </FlexBox>

            <Button
              variant="contained"
              className="py-3 md:py-4 px-5 md:px-8 rounded-card bg-blue150 shadow-none font-aeonik-bold text-sm xl:text-lg"
            >
              Get Started Now
            </Button>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
