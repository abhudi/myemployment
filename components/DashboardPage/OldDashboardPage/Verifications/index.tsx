import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import { verificationsData } from "@/constant/dashboardPage";

export default function Verifications() {
  return (
    <FlexBox className="w-full mt-6 xl:mt-10 gap-6 2xl:gap-10 flex-col xl:flex-row">
      <FlexBox className="bg-white py-6 2xl:py-8 px-6 rounded-2xl w-full xl:w-3/5 flex-col items-center md:items-start">
        <Typography className="text-[27px] text-blue400 font-aeonik-bold text-center md:text-start">
          Your Verifications at a Glance
        </Typography>

        <FlexBox className="w-full my-8 flex-col md:flex-row gap-8 md:gap-0 items-center md:items-start">
          {verificationsData.map(({ label, content, icon }, i) => (
            <FlexBox key={i} className="flex-1 items-center gap-2 2xl:gap-4">
              <img
                draggable={false}
                src={icon}
                alt=""
                className="w-12 2xl:w-16 3xl:w-auto"
              />
              <FlexBox className="flex-col">
                <Typography className="text-2xl 2xl:text-3xl text-blue400 font-aeonik-black">
                  {label}
                </Typography>
                <Typography className="text-neutral-700 text-base 2xl:text-lg">
                  {content}
                </Typography>
              </FlexBox>
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>

      <FlexBox className="bg-white py-6 2xl:py-8 px-4 md:px-6 rounded-2xl w-full xl:w-2/5 flex-col items-center md:items-start">
        <Typography className="text-[27px] text-blue400 font-aeonik-bold text-center md:text-start">
          Your Request
        </Typography>

        <FlexBox className="items-center gap-4 mt-6 mb-4">
          <img
            draggable={false}
            src="/assets/img/dashboard/download.png"
            alt=""
          />
          <Typography className="text-neutral-700 text-base 2xl:text-lg">
            Your Verification Request in on the Process once it available click
            on button on download
          </Typography>
        </FlexBox>

        <Button
          variant="contained"
          className="rounded-card bg-gray175 text-blue150 px-8 py-2 sm:py-3 font-aeonik-bold text-base md:text-xl shadow-none"
        >
          Download Now
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
