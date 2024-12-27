"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <FlexBox className="w-full flex-col gap-10 h-[calc(100vh-186px)] lg:h-[calc(100vh-196px)] justify-center items-center">
      <Typography className="font-aeonik-black text-4xl md:text-5xl text-blue400">
        Coming Soon!
      </Typography>
      <Typography className="text-sm sm:text-base md:text-lg text-neutral-700">
        We are currently working hard on this page!
      </Typography>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        className="py-3 px-6 rounded-xl bg-blue400 text-white shadow-none font-aeonik-medium text-sm"
        onClick={() => router.back()}
      >
        Go back to Previous page
      </Button>
    </FlexBox>
  );
}
