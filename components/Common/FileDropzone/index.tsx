"use client";

import CloseIcon from "@mui/icons-material/Close";
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
  files?: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  type?: "request" | "file";
};

const dropzoneRef = createRef<DropzoneRef>();

const openDialog = () => {
  if (dropzoneRef.current) {
    dropzoneRef.current.open();
  }
};

const MB_LIMIT = "50.00";
const SIZE_LIMIT = +MB_LIMIT << 20;

export default function FileDropzone({ files, setFiles, type }: Props) {
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

  function handleRemoveFile(index: number) {
    const updatedFiles = files?.filter((file, i) => i !== index) || [];
    setFiles(updatedFiles);
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
      multiple
      maxSize={SIZE_LIMIT}
      onDrop={(acceptedFiles, fileRejections) => {
        if (acceptedFiles.length > 0) {
          setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        }
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
              className="bg-light50 py-8 border border-slate-200 max-w-[380px] w-full flex justify-center items-center rounded-2xl my-2 hover:cursor-pointer"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <FlexBox className="flex-col items-center">
                <img src="/assets/img/dashboard/common/upload.png" alt="" />

                <Typography className="text-2xl text-blue400 text-center mt-4">
                  Drag files to upload <br />
                  <span className="text-xl text-neutral-500">or</span>
                </Typography>

                <Button
                  variant="outlined"
                  onClick={openDialog}
                  className="text-base text-blue150 font-aeonik-bold py-3 px-6 my-3 border-blue150 rounded-xl"
                >
                  Browse Files
                </Button>

                <Typography className="text-sm 2xl:text-base text-neutral-700">
                  {type === "file" ? (
                    <>
                      Max File size:{" "}
                      <span className="font-aeonik-bold">50 MB</span>
                    </>
                  ) : (
                    <>CSV Upload For Multiple</>
                  )}
                </Typography>

                <Typography className="text-sm 2xl:text-base text-neutral-700">
                  {type === "file" ? (
                    <>
                      Supported File Type:{" "}
                      <span className="font-aeonik-bold">PDF, SVG, Excel</span>
                    </>
                  ) : (
                    <>Verification Requests</>
                  )}
                </Typography>
              </FlexBox>
            </Box>
            {files?.map((file, i) => (
              <FlexBox
                key={i}
                className="border border-slate-200 rounded-xl p-2 justify-between items-center"
              >
                <FlexBox className="items-center gap-2">
                  <img src={handleFileIcon(file)} alt="" />
                  <Typography className="text-blue400 text-base font-bold">
                    {file.name} <br />{" "}
                    <span className="text-sm text-neutral-700 font-normal">
                      {size(file.size)}
                    </span>
                  </Typography>
                </FlexBox>

                <IconButton onClick={() => handleRemoveFile(i)}>
                  <CloseIcon className="text-base" />
                </IconButton>
              </FlexBox>
            ))}
          </>
        );
      }}
    </Dropzone>
  );
}
