import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { getStartedData } from "@/constant/homePage/oldHomePage3";

export default function GetStarted() {
  return (
    <FlexBox className="w-full bg-white">
      <Container className="w-11/12 max-w-container py-5 sm:py-10 lg:py-20 flex-col items-center text-center">
        <Typography className="text-xl md:text-2xl text-blue150 font-aeonik-bold py-4">
          Get Started Now
        </Typography>

        <Typography className="text-3xl sm:text-4xl xl:text-5xl text-blue400 font-aeonik-bold">
          Easy Steps to Get Started Now
        </Typography>

        <FlexBox className="items-center lg:items-stretch flex-col lg:flex-row justify-evenly 2xl:justify-between max-w-laptop w-full py-7 md:py-14 gap-5 sm:gap-10">
          <FlexBox className="flex-col bg-blue400 rounded-card p-4 sm:p-6 md:p-8 2xl:p-12 items-start max-w-[450px] 2xl:max-w-[570px]">
            <Typography className="p-2 sm:p-0 text-3xl md:text-4xl text-white font-aeonik-bold text-start">
              For Consumers
            </Typography>

            <FlexBox className="items-start py-5 2xl:my-10 gap-3 sm:gap-6 min-h-[400px] md:min-h-[470px]">
              <img
                draggable={false}
                src="/assets/img/home/oldHome-3/getStarted/consumer.png"
                alt=""
                className="w-16 md:w-min"
              />

              <FlexBox className="flex-col gap-8 sm:gap-14 2xl:gap-16 mt-2">
                {getStartedData.consumers.map(({ title, content }, i) => (
                  <FlexBox
                    key={i}
                    className="flex-col rounded-card text-start text-white"
                  >
                    <Typography className="text-lg md:text-xl 2xl:text-2xl font-aeonik-black">
                      {title}
                    </Typography>
                    <Typography className="text-sm md:text-base 2xl:text-lg text-neutral-300 font-aeonik-light">
                      {content}
                    </Typography>
                  </FlexBox>
                ))}
              </FlexBox>
            </FlexBox>

            <Button
              variant="contained"
              className="py-3 2xl:py-4 px-8 2xl:px-14 rounded-card bg-white text-blue400 shadow-none font-aeonik-bold text-sm xl:text-lg"
            >
              Get Started Now
            </Button>
          </FlexBox>

          <FlexBox className="flex-col bg-slate50 rounded-card p-6 md:p-8 2xl:p-12 items-start max-w-[450px] 2xl:max-w-[570px]">
            <Typography className="p-2 sm:p-0 text-3xl md:text-4xl text-blue400 font-aeonik-bold text-start">
              For Data Contributors
            </Typography>

            <FlexBox className="items-start mt-5 sm:mt-0 py-5 2xl:my-10 gap-3 sm:gap-6 min-h-[400px] md:min-h-[470px]">
              <img
                draggable={false}
                src="/assets/img/home/oldHome-3/getStarted/dataContributor.png"
                alt=""
                className="w-16 md:w-min"
              />

              <FlexBox className="flex-col gap-4 sm:gap-6 -mt-5 sm:mt-2">
                {getStartedData.dataContributors.map(
                  ({ title, content }, i) => (
                    <FlexBox
                      key={i}
                      className="flex-col rounded-card text-start text-blue400"
                    >
                      <Typography className="text-lg md:text-xl 2xl:text-2xl font-aeonik-black">
                        {title}
                      </Typography>
                      <Typography className="text-sm md:text-base 2xl:text-lg text-blue400 font-aeonik-light">
                        {content}
                      </Typography>
                    </FlexBox>
                  ),
                )}
              </FlexBox>
            </FlexBox>

            <Button
              variant="contained"
              className="py-3 2xl:py-4 px-8 2xl:px-14 rounded-card bg-blue400 text-white shadow-none font-aeonik-bold text-sm xl:text-lg"
            >
              Get Started Now
            </Button>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
