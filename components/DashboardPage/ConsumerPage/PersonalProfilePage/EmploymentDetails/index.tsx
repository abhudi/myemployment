import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function EmploymentDetails() {
  const labels: { [index: string]: string } = {
    0.5: "Very Poor",
    1: "Poor",
    1.5: "Below Average",
    2: "Fair",
    2.5: "Average",
    3: "Somewhat satisfied",
    3.5: "Satisfied",
    4: "Very Good",
    4.5: "Extremely satisfied",
    5: "Absolutely delighted",
  };

  return (
    <FlexBox className="flex-col justify-start items-center bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card relative">
      <img
        draggable={false}
        src="/assets/img/dashboard/consumer/personalProfile/notEditable.png"
        alt=""
        className="absolute -top-[11px] 3xl:-top-[14px] -right-[11px] 3xl:-right-[14px] w-28 3xl:w-auto"
      />

      <FlexBox className="flex-col">
        <Typography className="w-full text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
          Recurring Submission Setup
        </Typography>

        <Typography className="w-full text-base text-center xl:text-start text-blue400 mb-6">
          This field Can&apos;t be Edited title here
        </Typography>

        <FlexBox className="flex-col gap-6">
          <FlexBox className="flex-col gap-2">
            <Typography className="text-base 2xl:text-lg font-aeonik-medium text-blue400">
              Employment start date
            </Typography>
            <Typography className="px-4 2xl:px-6 py-4 2xl:py-5 text-base 2xl:text-lg bg-stone-100 text-neutral-500 rounded-xl">
              25 January 2024
            </Typography>
          </FlexBox>

          <FlexBox className="flex-col gap-2">
            <Typography className="text-base 2xl:text-lg font-aeonik-medium text-blue400">
              Current salary (if applicable)
            </Typography>
            <Typography className="px-4 2xl:px-6 py-4 2xl:py-5 text-base 2xl:text-lg bg-stone-100 text-neutral-500 rounded-xl">
              $ 2500.00 (USD) Monthly
            </Typography>
          </FlexBox>

          <FlexBox className="flex-col gap-2">
            <Typography className="text-base 2xl:text-lg font-aeonik-medium text-blue400">
              Performance ratings (if applicable)
            </Typography>
            <FlexBox className="px-4 2xl:px-6 py-4 2xl:py-5 flex-row xl:flex-col 2xl:flex-row gap-1 justify-between bg-stone-100 text-neutral-500 rounded-xl">
              <Rating
                value={4.5}
                precision={0.5}
                emptyIcon={<StarIcon />}
                readOnly
              />
              <Typography className="text-base 2xl:text-lg hidden sm:block">
                {labels[4.5]}
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
