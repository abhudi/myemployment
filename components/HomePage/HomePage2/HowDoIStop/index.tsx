"use client";

import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function HowDoIStop() {
  return (
    <FlexBox className="w-full">
      <Container className="w-11/12 max-w-container flex-col items-center mb-10 md:mb-20">
        <Typography
          className="text-2xl sm:3xl md:text-4xl xl:text-5xl min-w-auto xl:min-w-[597px] font-aeonik-bold text-center text-blue400"
          sx={(theme) => ({
            [theme.breakpoints.up("lg")]: {
              lineHeight: "55px!important",
            },
          })}
        >
          How do I Stop it?
        </Typography>

        <Typography className="text-base w-2/3 xl:w-auto sm:text-2xl md:text-3xl text-center xl:text-start text-blue150 font-aeonik-bold py-2 sm:py-4">
          Get vocal! Share it on social and email your Data Contributor
        </Typography>

        <FlexBox className="gap-4 md:gap-8 my-4 sm:my-8 flex-col md:flex-row w-full justify-center items-center">
          <Button
            variant="contained"
            className="w-4/5 sm:w-3/5 md:w-auto rounded-card bg-blue150 min-w-auto md:min-w-80 shadow-none py-3 md:py-4 px-5 lg:px-10 2xl:px-12 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
          >
            Share on Social Media
          </Button>
          <Button
            variant="contained"
            className="w-4/5 sm:w-3/5 md:w-auto rounded-card bg-blue400 min-w-auto md:min-w-80 shadow-none py-3 md:py-4 px-5 lg:px-10 2xl:px-12 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
          >
            Email My Data Contributor
          </Button>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
