"use client";

import Typography from "@mui/material/Typography";
import { useState } from "react";

import FileDropzone from "@/components/Common/FileDropzone";
import FlexBox from "@/components/Common/FlexBox";

export default function BulkRequestTool() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FlexBox className="flex-col justify-start items-center bg-white px-1 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-full 2xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2">
        Bulk Request Tool
      </Typography>

      <Typography className="w-full text-center 2xl:text-start text-xl sm:text-2xl text-blue400 my-2">
        (for high-volumn verifiers)
      </Typography>

      <FlexBox className="min-w-[280px] md:min-w-[380px] 2xl:min-w-min gap-4 flex-col w-11/12 md:w-1/2 2xl:w-full">
        <FileDropzone files={files} setFiles={setFiles} type="request" />
      </FlexBox>

      <Typography className="w-full font-aeonik-bold text-center text-xl sm:text-2xl text-blue200 mt-2 underline">
        Batch status tracking
      </Typography>
    </FlexBox>
  );
}
