"use client";

import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { faqData1, faqData2 } from "@/constant/homePage/homePage2";
import { FaqItem } from "@/types";

interface FaqSectionProps {
  data: {
    title: string;
    faqData: FaqItem[];
  };
}

function FaqSection({ data }: FaqSectionProps) {
  const [active, setActive] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (active.includes(index)) {
      setActive(active.filter((i) => i !== index));
    } else {
      setActive([...active, index]);
    }
  };

  return (
    <FlexBox className="flex-col w-full xl:w-2/3 bg-gray100 p-4 md:p-12 2xl:p-16 rounded-t-card xl:rounded-t-[85px] rounded-bl-card xl:rounded-bl-[85px]">
      <Typography className="text-center md:text-start text-blue400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aeonik-bold w-11/12 py-3 md:py-5 2xl:py-10">
        {data.title}
      </Typography>

      {data.faqData.map(({ title, content }, i) => (
        <FlexBox className="w-full flex-col" key={i}>
          <FlexBox
            className="justify-between items-center ps-4 md:ps-10 rounded-2xl bg-white cursor-pointer mt-2 md:mt-4 border-2 border-[#e4f8ff]"
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
              {content}
            </Typography>
          </FlexBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
}

export default function FAQ() {
  return (
    <FlexBox className="w-full mb-10 md:mb-20" id="faq">
      <Container className="w-11/12 mx-auto max-w-container flex flex-col items-center text-center gap-10 md:gap-20">
        <FlexBox className="gap-20">
          <img
            draggable={false}
            src="/assets/img/home/home-2/faq/faq1.png"
            alt=""
            className="w-min hidden xl:block max-h-[545px]"
          />
          <FaqSection
            data={{
              title: "You May Not Know",
              faqData: faqData1,
            }}
          />
        </FlexBox>

        <FlexBox className="gap-20">
          <FaqSection
            data={{
              title: "How Did This Happen?",
              faqData: faqData2,
            }}
          />
          <img
            draggable={false}
            src="/assets/img/home/home-2/faq/faq2.png"
            alt=""
            className="w-min hidden xl:block max-h-[545px]"
          />
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
