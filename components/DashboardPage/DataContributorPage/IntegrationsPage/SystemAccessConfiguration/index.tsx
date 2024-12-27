"use client";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { useState } from "react";

import FlexBox from "@/components/Common/FlexBox";
import { systemAccessConfigurationData } from "@/constant/dashboardPage";
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
    <FlexBox className="flex-col px-1 md:px-2 min-w-[280px] md:min-w-[350px] w-1/2 3xl:w-full">
      {data.map(({ title, content }, i) => (
        <FlexBox
          className={clsx(
            data.length - 1 === i ? "border-b-0" : "border-b-2",
            "w-full flex-col border-slate-200 py-1.5",
          )}
          key={i}
        >
          <FlexBox
            className="flex-col justify-between items-center cursor-pointer"
            onClick={() => handleToggle(i)}
          >
            <FlexBox className="w-full justify-between items-center">
              <Typography className="font-aeonik-bold text-sm md:text-base 3xl:text-lg py-2 sm:py-0 text-neutral-800">
                {title}
              </Typography>

              <IconButton className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 m-2 rounded-xl">
                <KeyboardDoubleArrowRightIcon
                  className={clsx(
                    active.includes(i) && "rotate-90",
                    "text-blue400 text-2xl md:text-3xl transition-all duration-500 mb-1",
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

export default function SystemAccessConfiguration() {
  return (
    <FlexBox className="flex-col justify-start items-center gap-2 bg-white px-1 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto 2xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2">
        System Access Configuration
      </Typography>

      <Typography className="w-full text-center 2xl:text-start text-2xl text-neutral-700">
        (Saas Model)
      </Typography>

      <Typography className="w-11/12 sm:w-4/5 md:w-2/3 2xl:w-full text-center 2xl:text-start text-base 3xl:text-lg text-neutral-700 py-2">
        Lorem ipsum dolor sit amet, consecastetur adipiasrrscing elit. Quisque
        iaculis ipsum at dui gravida venenatis.
      </Typography>

      <FaqSection data={systemAccessConfigurationData} />
    </FlexBox>
  );
}
