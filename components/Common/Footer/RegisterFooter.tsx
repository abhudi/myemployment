import Typography from "@mui/material/Typography";

import FlexBox from "../FlexBox";

export function RegisterFooter() {
  return (
    <FlexBox className="w-full pt-10 bg-light">
      <FlexBox className="max-w-desktop w-11/12 sm:w-4/5 mx-auto items-center gap-2 text-center justify-between py-6 border-t-2 border-gray200 flex-col lg:flex-row">
        <Typography
          variant="body1"
          className="text-xs md:text-base text-neutral-500"
        >
          Copyright © 2024 my Employment.com , all rights reserved
        </Typography>
        <Typography
          variant="body1"
          className="text-xs md:text-base text-neutral-500"
        >
          Privacy Policy | Terms & Conditions
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
