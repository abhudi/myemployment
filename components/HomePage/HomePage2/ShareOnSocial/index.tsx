"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function ShareOnSocial() {
  return (
    <Container
      className="w-11/12 max-w-container mb-10 md:mb-20"
      id="share-on-social"
    >
      <FlexBox className="flex-col w-full">
        <FlexBox className="w-full flex-col relative text-white">
          <img
            draggable={false}
            src="/assets/img/home/home-2/shareOnSocial/bg.png"
            alt=""
            className="hidden xl:block"
          />

          <FlexBox className="w-full relative xl:absolute top-0 xl:top-1/2 -translate-y-0 xl:-translate-y-1/2 left-0 xl:left-1/2 -translate-x-0 xl:-translate-x-1/2 pb-10 xl:pb-0 bg-blue400 xl:bg-transparent rounded-t-card rounded-bl-card mx-auto justify-center">
            <FlexBox className="flex-col items-center">
              <Typography
                className="text-2xl sm:3xl md:text-4xl xl:text-5xl font-aeonik-bold text-center text-white my-10"
                sx={(theme) => ({
                  [theme.breakpoints.up("lg")]: {
                    lineHeight: "55px!important",
                  },
                })}
              >
                Share on Social
              </Typography>

              <FlexBox className="w-11/12 md:w-4/5 xl:w-2/3 px-5 md:px-10 xl:px-20 py-10 md:py-16 text-center relative bg-white rounded-card social-message">
                <img
                  draggable={false}
                  src="/assets/img/home/home-2/shareOnSocial/quote.png"
                  alt=""
                  className="w-16 absolute left-1/2 -translate-x-1/2 -top-7"
                />
                <Typography className="text-neutral-700 text-xl md:text-2xl xl:text-3xl">
                  &ldquo;My Data Contributor is allowing my info to be sold to
                  debt collectors and marketers&rdquo;
                </Typography>
              </FlexBox>

              <FlexBox className="gap-6 md:gap-10 mt-16 flex-col md:flex-row">
                <Button
                  variant="contained"
                  className="normal-case rounded-card bg-[#4369c2] min-w-60 shadow-none py-3 2xl:py-4 px-5 sm:px-10 gap-4 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
                >
                  <FacebookIcon className="text-3xl mb-1" />
                  Share on Facebook
                </Button>
                <Button
                  variant="contained"
                  className="normal-case rounded-card bg-black min-w-60 shadow-none py-3 2xl:py-4 px-5 sm: gap-4 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
                >
                  <XIcon className="text-3xl mb-1" />
                  Share on X
                </Button>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
