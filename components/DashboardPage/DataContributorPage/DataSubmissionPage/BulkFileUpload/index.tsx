"use client";

import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";

import FileDropzone from "@/components/Common/FileDropzone";
import FlexBox from "@/components/Common/FlexBox";

type Props = {
  files?: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export default function BulkFileUpload({ files, setFiles }: Props) {
  return (
    <FlexBox className="flex-col justify-between items-center bg-white px-1 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Bulk Upload File
      </Typography>

      <FlexBox className="gap-4 flex-col w-11/12 sm:w-3/4 md:w-1/2 xl:w-full">
        <FileDropzone files={files} setFiles={setFiles} />
      </FlexBox>
    </FlexBox>
  );
}
