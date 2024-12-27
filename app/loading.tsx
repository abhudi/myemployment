import CircularProgress from "@mui/material/CircularProgress";

import FlexBox from "@/components/Common/FlexBox";

export default function Loading() {
  return (
    <FlexBox className="h-screen w-full items-center justify-center">
      <CircularProgress />
    </FlexBox>
  );
}
