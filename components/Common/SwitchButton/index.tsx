"use client";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import clsx from "clsx";

import FlexBox from "@/components/Common/FlexBox";

type Props = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  labelStyle?: string;
  action?: () => void;
  bgStyle?: string[];
  transition?: string;
};

export default function SwitchButton({
  checked,
  setChecked,
  labelStyle,
  action,
  bgStyle,
  transition,
}: Props) {
  return (
    <InputLabel className="cursor-pointer">
      <Input
        type="checkbox"
        onChange={() => {
          action && action();
        }}
        className="sr-only"
      />
      <FlexBox
        className={clsx(
          labelStyle ? "me-4" : "mx-4",
          "w-[80px] items-center rounded-full duration-300 h-9 p-1",
          bgStyle
            ? checked
              ? bgStyle[0]
              : bgStyle[1]
            : "bg-white border border-purple50",
        )}
      >
        <Box
          className={clsx(
            checked ? (transition ? transition : "translate-x-[30px]") : "",
            labelStyle ? labelStyle : "switch-label w-10",
            "h-7 rounded-full bg-white duration-300",
          )}
        ></Box>
      </FlexBox>
    </InputLabel>
  );
}
