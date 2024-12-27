import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { resourcesData } from "@/constant/homePage/oldHomePage2";

export default function CallToAction() {
  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="flex-col">
        <FlexBox className="flex-col items-center my-5 md:my-10 2xl:my-20">
          <Typography className="text-blue400 font-aeonik-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center py-5 2xl:py-10 w-11/12 md:w-2/3">
            Stay up to data on, view, and Manage your Consumer and income data.
          </Typography>

          <Link href="/auth/register">
            <Button
              variant="contained"
              className="rounded-card bg-blue150 min-w-24 shadow-none py-1.5 lg:py-3 2xl:py-4 px-5 lg:px-10 2xl:px-14 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
            >
              Sign Up For Access
            </Button>
          </Link>

          <Typography className="text-sm lg:text-lg gap-4 font-aeonik-medium py-4">
            Have an Account?
            <Link
              href="/auth/login"
              className="text-blue400 cursor-pointer px-2"
            >
              Log In Here.
            </Link>
          </Typography>
        </FlexBox>

        <FlexBox className="w-full flex-col relative text-white">
          <img
            draggable={false}
            src="/assets/img/home/common/callToAction/bg.png"
            alt=""
            className="hidden xl:block"
          />

          <FlexBox
            className="w-11/12 relative xl:absolute top-0 xl:top-1/2 -translate-y-0 xl:-translate-y-1/2 left-0 xl:left-1/2 -translate-x-0 xl:-translate-x-1/2
      py-10 xl:py-0 bg-blue400 xl:bg-transparent rounded-t-card rounded-bl-card mx-auto justify-between grid xl:flex grid-cols-1 md:grid-cols-2 xl:grid-cols-none text-center xl:text-start gap-14 xl:gap-0"
          >
            <FlexBox className="flex-col">
              <img
                draggable={false}
                src="/assets/img/home/common/callToAction/logo.png"
                alt=""
                className="mx-auto w-40 xl:w-60 3xl:w-min"
              />
              <FlexBox className="justify-center gap-4 xl:gap-8 mt-5 xl:mt-10">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <LinkedInIcon />
              </FlexBox>
            </FlexBox>

            <FlexBox className="flex-col gap-5">
              <Typography className="font-aeonik-bold text-2xl xl:text-3xl 3xl:text-4xl">
                Contact us
              </Typography>
              <FlexBox className="gap-2 items-center justify-center xl:justify-start">
                <img
                  draggable={false}
                  src="/assets/img/home/common/callToAction/phone.png"
                  alt=""
                  className="w-5 xl:w-7"
                />
                <Typography className="text-sm xl:text-base 3xl:text-xl text-slate-300">
                  1 800 456 7890
                </Typography>
              </FlexBox>
              <FlexBox className="gap-2 items-center justify-center xl:justify-start">
                <img
                  draggable={false}
                  src="/assets/img/home/common/callToAction/mail.png"
                  alt=""
                  className="w-5 xl:w-7"
                />
                <Typography className="text-sm xl:text-base 3xl:text-xl text-slate-300">
                  info@myemployment.com
                </Typography>
              </FlexBox>
            </FlexBox>

            <FlexBox className="flex-col gap-5">
              <Typography className="font-aeonik-bold text-2xl xl:text-3xl 3xl:text-4xl">
                Resources
              </Typography>
              <FlexBox className="flex-col gap-1.5 xl:gap-3">
                {resourcesData.map((content, i) => (
                  <Typography
                    key={i}
                    className="text-sm xl:text-base 3xl:text-xl text-slate-300"
                  >
                    {content}
                  </Typography>
                ))}
              </FlexBox>
            </FlexBox>

            <FlexBox className="flex-col mx-7 md:mx-14 xl:mx-0 max-w-full xl:max-w-72 3xl:max-w-96 gap-5 items-center xl:items-start">
              <Typography className="font-aeonik-bold text-2xl xl:text-3xl 3xl:text-4xl">
                Newsletter
              </Typography>
              <Typography className="text-sm xl:text-base 3xl:text-xl text-slate-300">
                Subscribe our newsletter to get latest information directly to
                your mailbox
              </Typography>
              <InputBase
                placeholder="enter email...."
                endAdornment={
                  <IconButton className="bg-white h-auto w-min m-1">
                    <TelegramIcon className="text-blue400 text-lg md:text-2xl xl:text-4xl" />
                  </IconButton>
                }
                className="border border-purple400 text-white font-aeonik bg-blue375 rounded-card ps-4 me-0 xl:me-12"
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
