"use client";

import Typography from "@mui/material/Typography";
import Countdown from "react-countdown";

import FlexBox from "@/components/Common/FlexBox";

interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function DataRetentionPolicy() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 44);
  endDate.setHours(endDate.getHours() + 35);
  endDate.setMinutes(endDate.getMinutes() + 24);
  endDate.setSeconds(endDate.getSeconds() + 7);

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds }: Timer) => {
    const formatNumber = (num: number) => String(num).padStart(2, "0");
    return (
      <Typography className="font-aeonik-bold text-blue400 text-xl md:text-2xl mt-1 leading-none">
        {formatNumber(days)} : {formatNumber(hours)} : {formatNumber(minutes)} :{" "}
        {formatNumber(seconds)}
      </Typography>
    );
  };

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center flex-col xl:flex-row">
        <Typography className="flex gap-2 items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          Data Retention Policy
        </Typography>

        <FlexBox className="itmes-center flex-col sm:flex-row text-center sm:text-start rounded-lg bg-light275 p-4 border border-light300 gap-2 sm:gap-6">
          <Typography className="text-sm text-blue400 leading-none mt-1 ">
            Your Data Will
            <br />
            Automatically Deleted in:
          </Typography>

          <Countdown date={endDate} renderer={renderer} />
        </FlexBox>
      </FlexBox>

      <Typography className="text-neutral-700 mt-4 text-base leading-6 md:leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis
        ipsum at duaseei gravida venenatis. In ut scelerisque ante, ac faucibus
        augue. Aliquam lacinia tellus eget velit congue, semper porttitor massa
        dictum asiriawue it <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis
        ipsum at dui gravida venenatis. In ut scelerisque ante, ac faucibus aas
        orugue. Aliquam lacinia tellus eget velit congue, semper porttitor massa
        dictum. Praesent et mi sit amet felis volutpat dapibus in quis nibh.
        Maecenaac rhoncus nisi. Pellentesque aliquet libero turpis, eu convallis
        ex molestie ac. Praesent ex nibh, commodo eget viverra ac,
      </Typography>
    </FlexBox>
  );
}
