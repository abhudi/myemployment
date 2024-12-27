"use client";

import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function DataContributorSupport() {
  return (
    <FlexBox className="w-full">
      <Container className="w-11/12 max-w-container">
        <FlexBox className="w-full flex-col xl:flex-row text-white justify-center items-center my-10 md:my-28 gap-10 md:gap-20">
          <img
            draggable={false}
            src="/assets/img/home/home-2/dataContributorSupport/image.png"
            alt=""
            className="w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 3xl:w-min"
          />

          <FlexBox className="flex-col items-center xl:items-start w-11/12 xl:w-3/5 2xl:w-2/5">
            <FlexBox className="flex-col tems-center xl:items-start">
              <Typography
                className="text-2xl sm:3xl md:text-4xl xl:text-5xl font-aeonik-bold text-center xl:text-start text-blue400"
                sx={(theme) => ({
                  [theme.breakpoints.up("lg")]: {
                    lineHeight: "55px !important",
                  },
                })}
              >
                MyEmployment has your back and so does your Data Contributor,
                when they work with us.
              </Typography>

              <FlexBox className="flex-col gap-4 my-5 md:my-10 w-full">
                <Typography className="text-center xl:text-start text-base sm:text-xl text-neutral-700">
                  Don&apos;t get mad at your Data Contributor, they may not
                  know. <br /> By searching for your Data Contributor in our
                  database you can inform them and help out your fellow
                  Consumer. We will never share your data to any 3rd party,
                  that&apos;s the MyEmployment guarantee.
                </Typography>
              </FlexBox>
            </FlexBox>

            <Button
              variant="contained"
              className="py-3 md:py-4 px-10 md:px-12 rounded-card bg-blue150 shadow-none font-aeonik-bold text-sm xl:text-lg"
            >
              Check Here
            </Button>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
