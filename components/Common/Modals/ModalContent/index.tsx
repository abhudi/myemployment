"use client";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { forwardRef, PropsWithChildren } from "react";

import FlexBox from "@/components/Common/FlexBox";
import { useHideModal } from "@/store/hooks/modal";

type Props = PropsWithChildren<{
  title: string;
  closeBtn?: boolean;
}>;

export default forwardRef<HTMLInputElement, Props>(function ModalContent(
  { title, children, closeBtn },
  ref,
) {
  const hideModal = useHideModal();
  return (
    <FlexBox
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white p-4 md:p-8 overflow-auto max-h-[99%]"
      tabIndex={-1}
      ref={ref}
    >
      {closeBtn && (
        <IconButton onClick={hideModal} className="absolute top-2 right-2">
          <CloseIcon fontSize="inherit" />
        </IconButton>
      )}
      <FlexBox className="w-full items-center justify-center py-2 md:py-4">
        <Typography
          variant="h5"
          className="text-xl md:text-2xl font-semibold py-2 text-center"
        >
          {title}
        </Typography>
      </FlexBox>
      {children}
    </FlexBox>
  );
});
