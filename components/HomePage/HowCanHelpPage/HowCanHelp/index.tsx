"use client";

import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { useState } from "react";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { howCanHelpData } from "@/constant/homePage/howCanHelpPage";

import HelpConsumer from "../HelpConsumer";
import HelpDataContributor from "../HelpDataContributor";

export default function HowCanHelp() {
  const [role, setRole] = useState<string | null>(null);

  return (
    <FlexBox className={clsx("w-full mb-10", role ? "bg-white" : "bg-gray100")}>
      <Container className="w-11/12 max-w-container pt-10 md:pt-20 flex-col items-center text-center">
        {!role ? (
          <>
            <Typography className="text-xl md:text-2xl text-blue150 font-aeonik-bold py-2 sm:py-4">
              How can we Help?
            </Typography>

            <Typography className="text-2xl sm:3xl md:text-4xl xl:text-5xl text-blue400 font-aeonik-bold">
              How MyEmployment App Can Help you?
            </Typography>

            <FlexBox className="gap-4 sm:gap-8 md:gap-0 items-center md:items-stretch flex-col md:flex-row w-full max-w-laptop justify-evenly xl:justify-between py-5 pb-0 sm:py-7 md:py-14">
              {howCanHelpData.map(
                ({ role, image, title, content, btnContent }, i) => (
                  <FlexBox
                    key={i}
                    className="flex-col bg-white p-3 rounded-card max-w-96 md:max-w-80 lg:max-w-[400px] xl:max-w-[540px] items-stretch"
                  >
                    <img
                      draggable={false}
                      src={image}
                      alt=""
                      className="w-min"
                    />
                    <FlexBox className="flex-col justify-between h-full">
                      <FlexBox className="flex-col">
                        <Typography className="text-2xl xl:text-4xl text-blue400 font-aeonik-black my-4 sm:my-6 xl:my-10">
                          {title}
                        </Typography>
                        <Typography className="text-base xl:text-xl text-neutral-700 mx-4 xl:mx-8">
                          {content}
                        </Typography>
                      </FlexBox>

                      <Button
                        variant="contained"
                        className="my-4 sm:my-6 xl:my-8 py-3 xl:py-4 px-8 xl:px-14 rounded-card bg-blue100 shadow-none font-aeonik-bold text-sm xl:text-lg"
                        onClick={() => setRole(role)}
                      >
                        {btnContent}
                      </Button>
                    </FlexBox>
                  </FlexBox>
                ),
              )}
            </FlexBox>
          </>
        ) : role === "consumer" ? (
          <HelpConsumer setRole={setRole} />
        ) : (
          <HelpDataContributor setRole={setRole} />
        )}
      </Container>
    </FlexBox>
  );
}
