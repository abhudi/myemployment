import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { OldHomeFooter3 } from "@/components/Common/Footer";
import { resourcesData } from "@/constant/homePage/oldHomePage2";

export default function CallToAction() {
  return (
    <FlexBox className="bg-blue500 text-white relative">
      <Container className="w-11/12 max-w-container">
        <FlexBox className="w-full pt-7 md:pt-14 xl:pt-28 flex-col">
          <img
            draggable={false}
            src="/assets/img/home/oldHome-3/callToAction/logo.png"
            alt=""
            className="hidden md:block absolute w-min bottom-0 left-1/2 -translate-x-1/2"
          />

          <FlexBox className="w-11/12 relative py-5 md:py-10 xl:py-0 xl:bg-transparent rounded-t-card rounded-bl-card mx-auto justify-between grid xl:flex grid-cols-1 md:grid-cols-2 xl:grid-cols-none text-center xl:text-start gap-14 xl:gap-0">
            <FlexBox className="flex-col">
              <img
                draggable={false}
                src="/assets/img/home/callToAction/logo.png"
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

          <OldHomeFooter3 />
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
