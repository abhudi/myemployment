import Typography from "@mui/material/Typography";

import CustomCheckBoxWithLabel from "@/components/Common/CustomCheckBoxWithLabel";
import FlexBox from "@/components/Common/FlexBox";

const settings = [
  "Data Contributors",
  "Partners",
  "Government Agencies",
  "Rental or Housing",
  "Background Check",
  "Auto Companies",
];

export default function DataSharingSettings() {
  return (
    <FlexBox className="flex-col justify-start items-center xl:items-start bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
     
      <FlexBox className="w-full flex-col items-center xl:items-start gap-2 *:md:gap-4">
        <Typography className="gap-8 flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-pink400 my-2">
          Custom Data Sharing Settings
        </Typography>
        <FlexBox className="w-full flex-col items-center xl:items-start gap-2 *:md:gap-4 overflow-auto max-h-72">
        {settings.map((title, i) => (
          <FlexBox
            key={i}
            className="pl-1 w-3/4 xl:w-full flex-col items-center md:items-start text-center md:text-start gap-1 justify-between py-1 md:py-2"
          >
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
              {title}
            </Typography>

            <FlexBox className="w-44 md:w-full flex-col md:flex-row justify-between">
              <CustomCheckBoxWithLabel label="Employment Date" />
              <CustomCheckBoxWithLabel label="Salary" />
              <CustomCheckBoxWithLabel label="Performance" />
            </FlexBox>
          </FlexBox>
        ))}
      </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
