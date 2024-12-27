"use client";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

import FlexBox from "@/components/Common/FlexBox";
import { string } from "joi";

type Props = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  labelStyle?: string;
  labelFirst?: string;
  labelSecond?: string;
  xBase?: string; 
  xBaseUpdate?: string;
  wBase?: string; 
  wBaseUpdate?: string; 
};

export default function SwitchButtonWithLabel({
  checked,
  setChecked,
  labelStyle,
  labelFirst,
  labelSecond,
  xBase,
  xBaseUpdate,
  wBase,
  wBaseUpdate,
  
}: Props) {

  return (
    <InputLabel className="cursor-pointer">
      <Input
        type="checkbox"
        onChange={() => setChecked(!checked)}
        className="sr-only"
      />
      <FlexBox
        className={clsx(
          labelStyle ? "me-6" : "mx-6",
          xBaseUpdate ? `w-[150px]` : wBaseUpdate ? `w-[210px]` : `w-[120px]`,
        
          `h-11 items-center rounded-full p-1 duration-300 border border-purple50 bg-white relative`,
        )}
      >
        <FlexBox
          className={clsx(
            checked
              ? labelStyle
                ? xBase ? `translate-x-[76px]`  : wBase ? `translate-x-[98px]` : `translate-x-[46px]` 
                : "translate-x-[30px]"
              : "",
            labelStyle ? labelStyle : "switch-label",
            wBase ? `w-[100px]` : `w-[60px]`,
            "h-9 rounded-full bg-white duration-300 text-white font-aeonik-bold justify-center items-center z-20",
          )}
        >
          {checked ? labelFirst : labelSecond}
        </FlexBox>

        <FlexBox className="absolute items-center w-full">
          <Typography className="w-1/2 text-center text-neutral-700 font-aeonik-medium">
            { labelSecond}
   
          </Typography>
          <Typography className="w-1/2 text-start text-neutral-700 font-aeonik-medium ps-3">
            {labelFirst}
     
          </Typography>
        </FlexBox>
      </FlexBox>
    </InputLabel>
  );
}
