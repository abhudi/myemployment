import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";

import FlexBox from "../FlexBox";

export function OldHomeFooter3() {
  return (
    <Container className="w-11/12 max-w-desktop">
      <FlexBox className="w-full bg-transparent mt-3 md:mt-14 xl:mt-28 py-4">
        <FlexBox className="max-w-desktop w-11/12 sm:w-full mx-auto items-center gap-2 text-center justify-between py-6 flex-col lg:flex-row border-t border-neutral-500">
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
    </Container>
  );
}
