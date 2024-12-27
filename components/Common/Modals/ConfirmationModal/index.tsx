"use client";

import Button from "@mui/material/Button";
import { forwardRef, useState } from "react";

import { ConfirmationFormValues } from "@/api/types";
import { useHideModal } from "@/store/hooks/modal";

import FlexBox from "../../FlexBox";
import LoadingButton from "../../LoadingButton";
import ModalContent from "../ModalContent";

export default forwardRef<HTMLInputElement, ConfirmationFormValues>(
  function ConfirmationModal({ content, action }, ref) {
    const hideModal = useHideModal();
    const [isLoading, setIsLoading] = useState(false);

    const handleAction = () => {
      setIsLoading(true);
      setTimeout(() => {
        action();
        setIsLoading(false);
      }, 2000);
    };

    return (
      <ModalContent title={content} ref={ref}>
        <FlexBox className="gap-4 justify-center mt-3 md:mt-5 min-w-[270px]">
          <FlexBox className="gap-4 w-full">
            <Button
              variant="outlined"
              className="w-1/2 rounded-3xl py-2 font-aeonik-bold text-base mt-6"
              color="inherit"
              onClick={hideModal}
            >
              Cancel
            </Button>
            <LoadingButton
              variant="contained"
              className="w-1/2 rounded-3xl py-2 font-aeonik-bold text-base mt-6"
              type="submit"
              loading={isLoading}
              onClick={handleAction}
            >
              Ok
            </LoadingButton>
          </FlexBox>
        </FlexBox>
      </ModalContent>
    );
  },
);
