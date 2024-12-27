"use client";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { SetStateAction, useState } from "react";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import {
  consumerFaqData1,
  consumerFaqData2,
} from "@/constant/homePage/howCanHelpPage";

function FaqSection({
  data,
}: {
  data: typeof consumerFaqData1 | typeof consumerFaqData2;
}) {
  const [active, setActive] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (active.includes(index)) {
      setActive(active.filter((i) => i !== index));
    } else {
      setActive([...active, index]);
    }
  };

  return (
    <FlexBox className="flex-col w-full xl:w-2/3 bg-gray100 py-4 md:py-8 px-6 md:px-10 rounded-t-card xl:rounded-t-[65px] rounded-bl-card xl:rounded-bl-[65px]">
      <Typography className="text-center md:text-start text-blue400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aeonik-bold w-11/12 py-3 md:py-5 2xl:py-10">
        {data.title}
      </Typography>

      <Typography className="text-neutral-700 text-sm sm:text-base md:text-xl w-full text-center md:text-start pb-2 sm:pb-4">
        {data.subtitle}
      </Typography>

      {data.content.map(({ title, description }, i) => (
        <FlexBox className="w-full flex-col" key={i}>
          <FlexBox
            className="justify-between items-center ps-6 md:ps-10 rounded-2xl bg-white cursor-pointer mt-2 md:mt-4 border-2 border-[#e4f8ff]"
            onClick={() => handleToggle(i)}
          >
            <Typography className="text-sm md:text-base lg:text-lg py-2 sm:py-0">
              {title}
            </Typography>

            <IconButton
              className={`${
                active.includes(i) ? "bg-blue150" : "bg-blue400"
              } h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 m-2 rounded-xl`}
            >
              <AddIcon
                className={`${
                  active.includes(i) && "rotate-90"
                } text-white text-2xl sm:text-3xl transition-all duration-500`}
              />
            </IconButton>
          </FlexBox>

          <FlexBox
            className={`${
              active.includes(i)
                ? "max-h-[400px] opacity-100"
                : "invisible max-h-0 opacity-0"
            } transition-all duration-500 border-b-2 border-x-2 border-[#e4f8ff] cursor-pointer w-11/12 mx-auto text-start bg-white`}
          >
            <Typography className="p-4 text-xs md:text-base">
              {description}
            </Typography>
          </FlexBox>
        </FlexBox>
      ))}

      <Typography className="text-neutral-700 text-sm sm:text-base md:text-xl w-full text-center md:text-start pt-4 sm:pt-8">
        {data.footerContent}
      </Typography>
    </FlexBox>
  );
}

export default function HelpConsumer({
  setRole,
}: {
  setRole: React.Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <FlexBox className="w-full mb-10 md:mb-20" id="faq">
      <Container className="w-11/12 mx-auto max-w-container flex flex-col items-center text-center gap-10 md:gap-20">
        <IconButton
          onClick={() => setRole(null)}
          className="bg-blue150 text-white"
        >
          <ArrowBackIcon />
        </IconButton>

        <FlexBox className="flex-col items-center text-center">
          <Typography className="text-blue400 text-3xl md:text-4xl lg:text-5xl font-aeonik-bold w-11/12 py-5">
            How MyEmployment Helps Consumers
          </Typography>

          <Typography className="text-neutral-700 text-base md:text-xl w-full xl:w-1/2 3xl:w-2/3 pb-4">
            MyEmployment understands that your employment history is personal
            information, and you should have control over who can access it.
            That&apos;s why MyEmployment has designed its platform with consumer
            privacy and control as top priorities.
          </Typography>
        </FlexBox>

        <FlexBox className="gap-20 w-full">
          <img
            draggable={false}
            src="/assets/img/home/howCanHelp/helpConsumer1.jpg"
            alt=""
            className="w-min hidden xl:block max-h-[700px] rounded-t-card xl:rounded-t-[65px] rounded-bl-card xl:rounded-bl-[65px]"
          />
          <FaqSection data={consumerFaqData1} />
        </FlexBox>

        <FlexBox className="gap-20 w-full">
          <FaqSection data={consumerFaqData2} />
          <img
            draggable={false}
            src="/assets/img/home/howCanHelp/helpConsumer2.jpg"
            alt=""
            className="w-min hidden xl:block max-h-[550px] rounded-t-card xl:rounded-t-[65px] rounded-bl-card xl:rounded-bl-[65px]"
          />
        </FlexBox>

        <FlexBox className="flex-col items-center text-center">
          <Typography className="text-blue200 text-xl md:text-2xl font-aeonik-bold w-11/12 py-5">
            MyEmployment: Your Trusted Partner for Employment Verification
          </Typography>

          <Typography className="text-neutral-700 text-base md:text-xl w-full xl:w-1/2 3xl:w-2/3">
            MyEmployment is building a community of information sharing that is
            designed to make employment verification easy, secure, and
            transparent for Verifiers. By using MyEmployment and encouraging
            your employers to also do so you can have peace of mind knowing that
            your data is protected and that you are in control of data sharing.
          </Typography>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
