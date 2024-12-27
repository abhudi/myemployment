import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import { howItWorksData } from "@/constant/dashboardPage";

export default function HowItWorks() {
  return (
    <FlexBox className="w-full bg-white mt-6 xl:mt-10 p-8 rounded-2xl flex-col">
      <FlexBox className="w-full justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
        <Typography className="text-3xl font-aeonik-bold text-blue400">
          How It Works
        </Typography>

        <Button
          variant="contained"
          className="rounded-card bg-blue400 px-5 sm:px-8 py-2 sm:py-3 font-aeonik-bold text-base md:text-xl !normal-case"
        >
          Start a New Request
        </Button>
      </FlexBox>

      <FlexBox className="mt-10 md:mt-20 mb-4 md:mb-8 flex-col xl:flex-row gap-8 xl:gap-0">
        {howItWorksData.map(({ title, content, icon }, i) => (
          <FlexBox
            className="items-start justify-center xl:justify-normal"
            key={i}
          >
            <FlexBox className="flex-col items-center text-center">
              <img
                draggable={false}
                src={icon}
                alt=""
                className="w-24 2xl:w-min"
              />
              <Typography className="text-lg font-aeonik-bold text-blue400 my-3">
                {title}
              </Typography>
              <Typography className="w-4/5 md:w-auto text-base text-neutral-700">
                {content}
              </Typography>
            </FlexBox>
            {i !== howItWorksData.length - 1 && (
              <Box className="hidden xl:block border-b-2 border-dotted border-blue150 w-1/2 mt-10 2xl:mt-12"></Box>
            )}
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
}
