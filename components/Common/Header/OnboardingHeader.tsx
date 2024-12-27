import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import { useLogout } from "@/store/hooks/auth";

import FlexBox from "../FlexBox";

export function OnboardingHeader() {
  const logout = useLogout();
  return (
    <FlexBox className="bg-white w-full p-3 sm:p-4 shadow-lg shadow-slate-200 z-20">
      <FlexBox className="w-full justify-between items-center max-w-desktop mx-auto">
        <Link href="/">
          <img
            draggable={false}
            src="/assets/img/logo.png"
            alt=""
            className="w-40 sm:w-52 md:w-64"
          />
        </Link>

        <FlexBox className="gap-4">
          <IconButton className="bg-gray200 text-blue400 h-7 md:h-auto w-7 md:w-min">
            <QuestionMarkIcon className="text-base md:text-2xl" />
          </IconButton>

          <IconButton
            onClick={logout}
            className="bg-gray200 text-blue400 h-7 md:h-auto w-7 md:w-min"
          >
            <CloseIcon className="text-base md:text-2xl" />
          </IconButton>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
