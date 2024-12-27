"use client";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { useState } from "react";

import FlexBox from "@/components/Common/FlexBox";
import { faqData } from "@/constant/dashboardPage";
import { FaqItem } from "@/types";

const FaqSection = ({ data }: { data: FaqItem[] }) => {
  const [active, setActive] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (active.includes(index)) {
      setActive(active.filter((i) => i !== index));
    } else {
      setActive([...active, index]);
    }
  };

  return (
    <FlexBox className="flex-col grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4">
      {data.map(({ title, content }, i) => (
        <FlexBox className="w-full flex-col" key={i}>
          <FlexBox
            className="flex-col justify-between items-center ps-6 rounded-lg bg-white cursor-pointer border border-neutral-300"
            onClick={() => handleToggle(i)}
          >
            <FlexBox className="w-full justify-between items-center">
              <Typography className="text-sm md:text-base lg:text-lg py-2 sm:py-0 text-neutral-700">
                {title}
              </Typography>

              <IconButton
                className={`${
                  active.includes(i) ? "faq-blue-gradient" : "bg-slate100"
                } h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 m-2 rounded-xl`}
              >
                <KeyboardDoubleArrowRightIcon
                  className={clsx(
                    active.includes(i)
                      ? "rotate-90 text-white"
                      : "text-blue400",
                    "text-2xl sm:text-3xl transition-all duration-500",
                  )}
                />
              </IconButton>
            </FlexBox>

            <FlexBox
              className={`${
                active.includes(i)
                  ? "max-h-[400px] opacity-100"
                  : "invisible max-h-0 opacity-0"
              } transition-all duration-300 cursor-pointer w-full text-start`}
            >
              <Typography className="border-t border-neutral-300 py-4 me-4 text-xs md:text-base text-neutral-700">
                {content}
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default function FAQ() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center md:items-start flex-col">
        <Typography className="flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          Frequently Asked Questions
        </Typography>

        <FlexBox className="w-full xl:w-3/4 mb-6">
          <InputBase
            placeholder="Search your Question here..."
            endAdornment={
              <IconButton className="w-10 h-10 faq-btn-gradient rounded-lg">
                <SearchIcon className="text-blue200 text-2xl xl:text-3xl" />
              </IconButton>
            }
            className="ps-4 w-full text-sm md:text-base border border-neutral-300 text-black font-aeonik bg-white rounded-lg p-1.5"
          />
        </FlexBox>

        <FaqSection data={faqData} />
      </FlexBox>
    </FlexBox>
  );
}
