"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function DidYouKnow() {
  return (
    <FlexBox className="w-full">
      <Container className="w-11/12 max-w-container flex-col">
        <FlexBox className="w-full flex-col xl:flex-row text-white justify-between 3xl:justify-center items-center xl:items-start my-10 md:my-20 gap-6 xl:gap-10 md:gap-20">
          <img
            draggable={false}
            src="/assets/img/home/root/didYouKnow/image.png"
            alt=""
            className="z-20 w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 2xl:w-min"
          />

          <FlexBox className="flex-col w-11/12 md:w-2/3 xl:w-auto 3xl:w-2/5 items-center xl:items-start gap-4 relative">
            <Typography className="text-[26px] text-center xl:text-start text-blue300 font-aeonik-medium py-2">
              DID YOU KNOW?
              <img
                draggable="false"
                src="/assets/img/home/root/didYouKnow/border.png"
                alt=""
              />
            </Typography>

            <Typography className="text-blue400 text-center xl:text-start text-xl md:text-2xl leading-7 md:leading-9">
              Many Data Contributors are unknowingly allowing Consumer data to
              be sold to debt collectors, lenders & more.
            </Typography>

            <Typography className="text-base md:text-lg text-neutral-700">
              At MyEmployment, we prioritize the security and integrity of
              Consumer data, ensuring that sensitive information doesn&apos;t
              end up in the hands of debt collectors, lenders, or unauthorized
              third parties. Our platform is designed to give Data Contributors
              full transparency and control, allowing you to confidently manage
              verifications without compromising Consumer privacy, With data
              accessed only by authorized parties, you protect your workforce
              and build lasting trust within your organization.
            </Typography>

            <Typography className="text-blue150 text-center xl:text-start text-xl md:text-[22px] leading-7">
              Does your Data Contributor unknowingly allow your data to be sold
              to debt collectors?
            </Typography>

            <Link href="/home-2">
              <Button
                variant="contained"
                className="rounded-card bg-blue150 min-w-24 shadow-none py-3 ps-3 lg:ps-5 pe-6 lg:pe-10 gap-1 lg:gap-4 font-bold text-base lg:text-lg 2xl:text-xl text-start normal-case"
                startIcon={
                  <img
                    draggable={false}
                    src="/assets/img/home/common/btn-logo.png"
                    alt=""
                  />
                }
              >
                Verify the Right Way
              </Button>
            </Link>
          </FlexBox>
        </FlexBox>

        <FlexBox className="z-10 flex-col md:flex-row items-center gap-6 md:gap-8 justify-center ms-0 2xl:ms-[22%] mt-8 xl:mt-4 2xl:-mt-[13%] 3xl:-mt-[10%] 4xl:-mt-[11%] mb-10 md:mb-20">
          <img
            draggable="false"
            src="/assets/img/home/root/didYouKnow/item1.png"
            alt=""
            className="w-min md:w-52 xl:w-auto"
          />
          <img
            draggable="false"
            src="/assets/img/home/root/didYouKnow/item2.png"
            alt=""
            className="w-min md:w-52 xl:w-auto"
          />
          <img
            draggable="false"
            src="/assets/img/home/root/didYouKnow/item3.png"
            alt=""
            className="w-min md:w-52 xl:w-auto"
          />
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
