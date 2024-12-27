"use client";

import clsx from "clsx";

import AccountDetailsPage from "@/components/AuthPage/RegisterPage/AccountDetails";
import AccountSetupInfoPage from "@/components/AuthPage/RegisterPage/AccountSetupInfo";
import WaitingPage from "@/components/AuthPage/RegisterPage/WaitingPage";
import FlexBox from "@/components/Common/FlexBox";
import { useRegister } from "@/providers/RegisterProvider";

export default function RegisterPage() {
  const { step } = useRegister();
  return (
    <FlexBox
      className={clsx(
        "flex-col items-center justify-center w-full h-full max-w-desktop mx-auto bg-light",
        step == 3 && "waiting",
      )}
    >
      <img
        draggable={false}
        src="/assets/img/auth/register/logo-left.png"
        alt=""
        className={clsx(
          step == 3 ? "hidden" : "block",
          "absolute bottom-0 left-0 w-1/4",
        )}
      />
      <img
        draggable={false}
        src="/assets/img/auth/register/logo-right.png"
        alt=""
        className={clsx(
          step == 3 ? "hidden" : "block",
          "absolute top-0 right-0 w-1/4",
        )}
      />

      {step == 1 && <AccountSetupInfoPage />}

      {step == 2 && <AccountDetailsPage />}

      {step == 3 && <WaitingPage />}
    </FlexBox>
  );
}
