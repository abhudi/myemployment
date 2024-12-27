"use client";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { SetStateAction, useState } from "react";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { dataContributorFaqData } from "@/constant/homePage/howCanHelpPage";

function FaqSection({ data }: { data: typeof dataContributorFaqData }) {
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

      {data.content.map(({ title, description, subContent }, i) => (
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
            } flex-col transition-all duration-500 border-b-2 border-x-2 border-[#e4f8ff] cursor-pointer w-11/12 mx-auto text-start bg-white`}
          >
            <Typography className="p-4 text-xs md:text-base">
              {description}
            </Typography>
            {subContent?.map((content, i) => (
              <Typography className="px-4 py-2 text-xs md:text-base" key={i}>
                {content}
              </Typography>
            ))}
          </FlexBox>
        </FlexBox>
      ))}

      <Typography className="text-neutral-700 text-sm sm:text-base md:text-xl w-full text-center md:text-start pt-4 sm:pt-8">
        {data.footerContent}
      </Typography>
    </FlexBox>
  );
}

export default function HelpDataContributor({
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
            How MyEmployment Helps Data Contributors
          </Typography>

          <Typography className="text-neutral-700 text-base md:text-xl w-full xl:w-1/2 3xl:w-2/3 pb-4">
            MyEmployment understands that managing employee data is a
            significant responsibility, and you want to ensure it&apos;s handled
            securely and ethically. This is where MyEmployment comes in to
            simplify processes, enhance data security, and ensure compliance.
          </Typography>
        </FlexBox>

        <FlexBox className="gap-20 w-full">
          <img
            draggable={false}
            src="/assets/img/home/howCanHelp/dataContributor.png"
            alt=""
            className="w-min hidden xl:block max-h-[700px] rounded-t-card xl:rounded-t-[65px] rounded-bl-card xl:rounded-bl-[65px]"
          />
          <FaqSection data={dataContributorFaqData} />
        </FlexBox>

        <FlexBox className="flex-col items-center text-center">
          <Typography className="text-blue200 text-xl md:text-2xl font-aeonik-bold w-11/12 py-5">
            MyEmployment: Your Partner in Secure and Ethical Employment
            Verification.
          </Typography>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
