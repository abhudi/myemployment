"use client";

import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { partial } from "filesize";
import { createRef, Dispatch, SetStateAction } from "react";
import Dropzone, { DropzoneRef } from "react-dropzone";
import toast from "react-hot-toast";

import Message from "@/enums/Message";

import Button from "../Button";
import FlexBox from "../FlexBox";

type Props = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
};

const dropzoneRef = createRef<DropzoneRef>();

const openDialog = () => {
  if (dropzoneRef.current) {
    dropzoneRef.current.open();
  }
};

const MB_LIMIT = "50.00";
const SIZE_LIMIT = +MB_LIMIT << 20;

export default function SingleFileDropzone({ file, setFile }: Props) {
  const size = partial({ standard: "jedec" });

  function handleFileIcon(file: File) {
    const extension = file.name.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return "/assets/img/dashboard/common/icon-pdf.svg";
      case "xls":
      case "xlsx":
        return "/assets/img/dashboard/common/icon-excel.svg";
      default:
        return "/assets/img/dashboard/common/icon-file.svg";
    }
  }

  function handleRemoveFile() {
    setFile(null);
  }

  return (
    <Dropzone
      ref={dropzoneRef}
      accept={{
        "application/pdf": [".pdf"],
        "image/svg+xml": [".svg"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          ".xlsx",
        ],
        "application/vnd.ms-excel": [".xls"],
      }}
      maxSize={SIZE_LIMIT}
      onDrop={(acceptedFile, fileRejections) => {
        setFile(acceptedFile[0] || null);
        fileRejections.forEach((rejection) => {
          const { errors } = rejection;
          if (errors[0]?.code === "file-too-large") {
            toast.error(Message.FileisTooLarge);
          } else {
            toast.error(Message.FileTypeInvalid);
          }
        });
      }}
      noClick
      noKeyboard
    >
      {({ getRootProps, getInputProps }) => {
        return (
          <>
            <Box
              className="w-full flex justify-center sm:justify-start items-center rounded-lg hover:cursor-pointer"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <FlexBox className="flex-col items-center">
                <Button
                  variant="outlined"
                  onClick={openDialog}
                  className="text-base gap-4 normal-case text-blue400 py-2.5 pe-6 my-3 border-neutral-300 bg-neutral-100 rounded-lg"
                >
                  <FlexBox className="p-2 bg-white text-blue400 rounded-lg">
                    <UploadIcon className="text-2xl" />
                  </FlexBox>
                  Upload a File
                </Button>
              </FlexBox>
            </Box>
            {file && (
              <FlexBox className="border border-slate-200 rounded-lg p-2 justify-between items-center">
                <FlexBox className="items-center gap-2">
                  <img src={handleFileIcon(file)} alt="" />
                  <Typography className="text-blue400 text-base font-bold">
                    {file.name} <br />{" "}
                    <span className="text-sm text-neutral-700 font-normal">
                      {size(file.size)}
                    </span>
                  </Typography>
                </FlexBox>

                <IconButton onClick={handleRemoveFile}>
                  <CloseIcon className="text-base" />
                </IconButton>
              </FlexBox>
            )}
          </>
        );
      }}
    </Dropzone>
  );
}
