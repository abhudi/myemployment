"use client";

import Typography from "@mui/material/Typography";
import { useState } from "react";

import FileDropzone from "@/components/Common/FileDropzone";
import FlexBox from "@/components/Common/FlexBox";

import StatusTracking from "./StatusTracking";

export default function DocumentSubmission() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 2xl:w-2/5 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Document Submission
      </Typography>

      <FlexBox className="w-full justify-center my-6">
        <FileDropzone files={files} setFiles={setFiles} type="request" />
      </FlexBox>

      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2 mb-6">
        Document Status Tracking
      </Typography>

      <StatusTracking />
    </FlexBox>
  );
}
