"use client";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function ShareOnMail() {
  return (
    <Container className="w-11/12 max-w-container mb-10 md:mb-20">
      <FlexBox className="flex-col w-full">
        <FlexBox className="flex-col items-center">
          <Typography
            className="text-2xl sm:3xl md:text-4xl xl:text-5xl font-aeonik-bold text-center text-blue400 my-3 md:my-6"
            sx={(theme) => ({
              [theme.breakpoints.up("lg")]: {
                lineHeight: "55px!important",
              },
            })}
          >
            Message your Data Contributor
          </Typography>

          <Typography className="text-center text-neutral-700 text-base md:text-2xl">
            Copy this email and send it to your Data Contributor!
          </Typography>

          <FlexBox className="w-11/12 md:w-4/5 xl:w-2/3 my-5 md:my-10 px-5 md:px-10 xl:px-20 py-10 md:py-16 text-center relative bg-gray100 rounded-card border border-sky-200">
            <Typography className="text-black text-xl md:text-2xl xl:text-3xl">
              &ldquo;My Data Contributor is allowing my info to be sold to debt
              collectors and marketers&rdquo;
            </Typography>
            <IconButton className="absolute right-2 bottom-2">
              <ContentCopyIcon className="text-sky-300" />
            </IconButton>
          </FlexBox>

          <Button
            variant="contained"
            className="normal-case rounded-card bg-[#4369c2] min-w-60 shadow-none py-3 2xl:py-4 px-5 sm:px-10 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
          >
            Share on Your Mail
          </Button>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
