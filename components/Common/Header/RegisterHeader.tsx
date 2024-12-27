import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import Button from "../Button";
import FlexBox from "../FlexBox";

export function RegisterHeader() {
  return (
    <FlexBox className="bg-white w-full p-3 sm:p-4 shadow-lg shadow-slate-200 z-30 relative">
      <FlexBox className="w-full justify-between items-center max-w-desktop mx-auto">
        <Link href="/">
          <img
            draggable={false}
            src="/assets/img/logo.png"
            alt=""
            className="w-40 sm:w-52 md:w-64"
          />
        </Link>

        <FlexBox className="item-center gap-2 sm:gap-4 h-7 md:h-auto">
          <Button
            className="text-blue150 font-bold text-sm md:text-base rounded-3xl px-4 md:px-6"
            variant="outlined"
          >
            Restart
          </Button>

          <IconButton className="bg-gray200 text-blue400 h-7 md:h-auto w-7 md:w-min">
            <CloseIcon className="text-base md:text-2xl" />
          </IconButton>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
