"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";

import FlexBox from "@/components/Common/FlexBox";

export default function WaitingPage() {
  return (
    <FlexBox className="z-10 w-full h-screen items-center justify-center flex-col">
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-[270px] sm:w-[350px] md:w-[450px] text-center md:text-start gap-2 md:gap-4">
        <img
          draggable={false}
          src="/assets/img/auth/register/clock.png"
          alt=""
          className="w-min mx-auto my-10"
        />

        <Typography
          variant="body1"
          className="w-full text-neutral-600 text-center text-sm md:text-lg mt-0 md:mt-4 px-3"
        >
          Your account is currently under review. We will notify you by email
          once the review is complete.
        </Typography>

        <Link href="/auth/login">
          <Typography className="text-center underline text-sm md:text-base  text-blue400 cursor-pointer">
            Click here to login.
          </Typography>
        </Link>
      </FlexBox>
    </FlexBox>
  );
}
