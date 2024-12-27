"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { SetStateAction, useState } from "react";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { faqData } from "@/constant/homePage/solutionsPage";
import { FAQRole } from "@/types/Faq";

interface FAQProps {
  role: FAQRole;
  setRole: React.Dispatch<SetStateAction<string | null>>;
}

export default function FAQ({ role, setRole }: FAQProps) {
  const [active, setActive] = useState(-1);
  const handleToggle = (index: number) => {
    active === index ? setActive(-1) : setActive(index);
  };

  return (
    <FlexBox className="w-full flex-col bg-gray100 py-10 md:py-20 mb-14 rounded-card">
      <Container className="w-11/12 lg:w-2/3 xl:w-11/12 mx-auto max-w-container flex flex-col items-center text-center">
        <IconButton
          onClick={() => setRole(null)}
          className="bg-blue150 text-white"
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography className="text-blue400 text-3xl md:text-4xl lg:text-5xl font-aeonik-bold w-11/12 py-5 md:py-10">
          {faqData[role].title}
        </Typography>

        <Typography className="text-neutral-700 text-base md:text-xl w-full xl:w-1/2 3xl:w-2/3 pb-4">
          {faqData[role].subtitle}
        </Typography>

        {faqData[role].content.map(({ title, description }, i) => (
          <FlexBox className="w-full xl:w-1/2 3xl:w-2/3 flex-col" key={i}>
            <FlexBox
              className="justify-between items-center ps-4 md:ps-10 border-2 border-sky-200 rounded-card bg-white cursor-pointer mt-2 md:mt-4"
              onClick={() => handleToggle(i)}
            >
              <Typography className="text-sm md:text-base lg:text-lg py-2 sm:py-0">
                {title}
              </Typography>

              <IconButton
                className={`${active === i ? "bg-blue150" : "bg-blue400"} h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 m-1`}
              >
                <ArrowForwardIosIcon
                  className={`${active === i && "rotate-90"} text-white text-sm md:text-lg transition-all duration-500`}
                />
              </IconButton>
            </FlexBox>

            <FlexBox
              className={`${
                active === i
                  ? "max-h-[400px] opacity-100"
                  : "invisible max-h-0 opacity-0"
              } transition-all duration-500 border-b-2 border-x-2 border-sky-200 cursor-pointer w-4/5 sm:w-11/12  mx-auto text-start bg-white`}
            >
              <Typography className="p-4 text-xs md:text-base">
                {description}
              </Typography>
            </FlexBox>
          </FlexBox>
        ))}

        <Typography className="text-blue400 font-aeonik-bold text-base md:text-xl w-full xl:w-1/2 3xl:w-2/3 pt-8">
          {faqData[role].footerContent}
        </Typography>
      </Container>
    </FlexBox>
  );
}
