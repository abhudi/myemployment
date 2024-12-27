"use client";

import { Theme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

import {
  useMfaMethods,
  useRemoveMfaMethod,
} from "@/api/requests/auth/mfaMethod";
import FlexBox from "@/components/Common/FlexBox";
import SwitchButton from "@/components/Common/SwitchButton";
import {
  useShowConfirmationModal,
  useShowSetUpEmailMfaModal,
  useShowSetUpOtpModal,
} from "@/store/hooks/modal";
import { useHideModal } from "@/store/hooks/modal";
import truncateText from "@/utils/truncateText";

export default function MfaSetUp() {
  const [checked, setChecked] = useState({
    oneTime: false,
    email: false,
  });

  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("desktop"),
  );

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("tablet"),
  );

  const showSetUpOtpModal = useShowSetUpOtpModal();
  const showConfirmationModal = useShowConfirmationModal();
  const showSetUpEmailMfaModal = useShowSetUpEmailMfaModal();
  const hideModal = useHideModal();

  const { data: mfaMethods, isLoading: isLoadingMfaMethods } = useMfaMethods();
  const { mutate: removeMfaMethod } = useRemoveMfaMethod();

  useEffect(() => {
    if (mfaMethods) {
      setChecked({
        oneTime: mfaMethods.available_mfa_methods.includes("otp"),
        email: mfaMethods.available_mfa_methods.includes("email"),
      });
    }
  }, [mfaMethods]);

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center 2xl:items-start flex-col">
        <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          Multi-Factor Authentication (MFA) Setup
        </Typography>

        <Typography className="text-base text-neutral-700 w-11/12 pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
          vel nibh non iaculis. Aenean et vestibulum arcu, nec commodo magna.
          Vestibul felis tortor malesuada nibh irausueas itanseawu tias uasew
          itua asirue loren...{" "}
          <span className="text-blue400 font-aeonik-bold">Learn More</span>
        </Typography>

        <FlexBox className="w-full justify-between flex-col items-center 2xl:items-start">
          <Typography className="text-2xl text-blue400 font-aeonik-bold py-4">
            Factors
          </Typography>

          <FlexBox className="gap-6 flex-col 2xl:flex-row items-center 2xl:items-start w-full">
            <FlexBox className="items-center gap-4 rounded-xl p-4 border border-slate-200 flex-col md:flex-row text-center md:text-start">
              <img
                src="/assets/img/dashboard/common/accountSecurity/oneTime-icon.png"
                alt=""
              />

              <FlexBox className="flex-col max-w-80">
                <Typography className="text-lg text-blue400 font-aeonik-bold">
                  One-time Password
                </Typography>
                <Typography className="text-base text-neutral-700">
                  {isTablet
                    ? truncateText(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra vela it.",
                        100,
                      )
                    : truncateText(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra vela it.",
                        40,
                      )}
                </Typography>
              </FlexBox>
              {isLoadingMfaMethods ? (
                <FlexBox className="w-[95px] items-center justify-center">
                  <PulseLoader size={10} />
                </FlexBox>
              ) : (
                <SwitchButton
                  checked={checked.oneTime}
                  setChecked={() => {}}
                  action={() =>
                    !checked.oneTime
                      ? showSetUpOtpModal({ action: setChecked })
                      : showConfirmationModal({
                          action: () => {
                            removeMfaMethod({ mfa_method: "otp" });
                            hideModal();
                          },
                          content:
                            "Are you sure you want to remove One-time Password method?",
                        })
                  }
                  labelStyle="white-green-switch-label w-7"
                  bgStyle={[
                    "bg-[#40d75a] border-none",
                    "bg-[#cccccc] border-none",
                  ]}
                  transition="translate-x-[44px]"
                />
              )}
            </FlexBox>

            <FlexBox className="items-center gap-4 rounded-xl p-4 border border-slate-200 flex-col md:flex-row text-center md:text-start">
              <img
                src="/assets/img/dashboard/common/accountSecurity/email-icon.png"
                alt=""
              />

              <FlexBox className="flex-col max-w-80">
                <Typography className="text-lg text-blue400 font-aeonik-bold">
                  Email
                </Typography>
                <Typography className="text-base text-neutral-700">
                  {isTablet
                    ? truncateText(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra vela it.",
                        100,
                      )
                    : truncateText(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra vela it.",
                        40,
                      )}
                </Typography>
              </FlexBox>

              {isLoadingMfaMethods ? (
                <FlexBox className="w-[95px] items-center justify-center">
                  <PulseLoader size={10} />
                </FlexBox>
              ) : (
                <SwitchButton
                  checked={checked.email}
                  setChecked={() => {}}
                  action={() =>
                    !checked.email
                      ? showSetUpEmailMfaModal({ action: setChecked })
                      : showConfirmationModal({
                          action: () => {
                            removeMfaMethod({ mfa_method: "email" });
                            hideModal();
                          },
                          content:
                            "Are you sure you want to remove Email MFA method?",
                        })
                  }
                  labelStyle="white-green-switch-label w-7"
                  bgStyle={[
                    "bg-[#40d75a] border-none",
                    "bg-[#cccccc] border-none",
                  ]}
                  transition="translate-x-[44px]"
                />
              )}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
