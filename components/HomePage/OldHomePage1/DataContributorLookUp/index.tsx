"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function DataContributorLookUp() {
  return (
    <FlexBox className="w-full">
      <Container className="w-11/12 max-w-container">
        <FlexBox className="w-full flex-col xl:flex-row text-white justify-center items-center my-10 md:my-20 gap-10 md:gap-20">
          <img
            draggable={false}
            src="/assets/img/home/oldHome-1/dataContributorLookUp/image.png"
            alt=""
            className="w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 3xl:w-min"
          />

          <FlexBox className="flex-col w-11/12 md:w-2/3 xl:w-2/5 items-center xl:items-start">
            <Typography
              className="text-2xl sm:3xl md:text-4xl xl:text-5xl min-w-auto xl:min-w-[597px] font-aeonik-bold text-center xl:text-start text-blue400"
              sx={(theme) => ({
                [theme.breakpoints.up("lg")]: {
                  lineHeight: "55px!important",
                },
              })}
            >
              Many Data Contributors are allowing Consumer data to be sold to
              debt collectors, lenders & more.
            </Typography>

            <Typography className="text-base w-2/3 xl:w-auto sm:text-2xl md:text-3xl text-center xl:text-start text-blue150 font-aeonik-bold py-4">
              How is this legal? How Do I stop this?
            </Typography>

            <Link href="/home-2">
              <Button
                variant="contained"
                className="rounded-card bg-blue150 min-w-24 shadow-none py-2 ps-3 lg:ps-5 pe-6 lg:pe-10 gap-1 lg:gap-4 font-aeonik-bold text-base lg:text-lg 2xl:text-xl text-start"
                startIcon={
                  <img
                    draggable={false}
                    src="/assets/img/home/common/btn-logo.png"
                    alt=""
                  />
                }
              >
                Does Your Data Contributor <br />
                Resell your data?
              </Button>
            </Link>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
