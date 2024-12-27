"use client";


import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";

import { useRegisterDataContributor } from "@/api/requests/auth/register/dataContributor/auth";
import { useRegisterConsumer } from "@/api/requests/auth/register/employee/auth";
import { useRegisterVerifier } from "@/api/requests/auth/register/verifier/auth";
import FlexBox from "@/components/Common/FlexBox";
import LoadingButton from "@/components/Common/LoadingButton";
import { accountCardData, purposeData } from "@/constant/registerPage";
import Message from "@/enums/Message";
import { useRegister } from "@/providers/RegisterProvider";
import { AccountType } from "@/types";

export default function AccountSetupInfoPage() {
  const {
    step,
    setStep,
    accountDetails,
    accountSetupInfo,
    setAccountSetupInfo,
  } = useRegister();

  const { mutateAsync: registerConsumer, isPending: isConsumerPending } =
  useRegisterConsumer();
const {
  mutateAsync: registerDataContributor,
  isPending: isDataContributorPending,
} = useRegisterDataContributor();
const { mutateAsync: registerVerifier, isPending: isVerifierPending } =
  useRegisterVerifier();

  const registrationHandlers = {
    consumer: registerConsumer,
    dataContributor: registerDataContributor,
    verifier: registerVerifier,
  };


  const handleSubmit = async () => {
    const registerFunction =
    registrationHandlers[accountSetupInfo.accountType as AccountType];

  if (!registerFunction) {
    toast.error(Message.InvalidAccountType);
    return;
  }
  else{
    setStep(2);
  }
  };

  return (
    <FlexBox className="rounded-card w-11/12 md:w-4/5 2xl:w-3/4 bg-white z-10 shadow-lg relative mt-32 justify-center xl:justify-end p-5 md:p-10 text-center sm:text-start">
      <FlexBox className="absolute top-0 left-1/2 -translate-x-1/2 xl:-translate-x-0 -translate-y-1/2">
        <FlexBox className="items-center gap-2">
        
          <Typography className="bg-blue150 text-sm sm:text-base text-white px-4 sm:px-8 py-1 sm:py-2 rounded-3xl font-aeonik-bold">
            Step {step} of 2
          </Typography>
        </FlexBox>
      </FlexBox>

      <img
        draggable={false}
        src="/assets/img/auth/register/step2.png"
        alt=""
        className="w-1/2 max-w-[600px] hidden xl:block absolute -top-5 -left-10"
      />

      <img
        draggable={false}
        src="/assets/img/logo.png"
        alt=""
        className="hidden xl:block absolute bottom-10 left-10 w-60"
      />

      <FlexBox className="w-full md:w-5/6 xl:w-1/2 flex-col">
        <Typography
          variant="h2"
          className="text-blue400 text-2xl sm:text-3xl md:text-[40px] font-aeonik-black py-2"
        >
          Set Up Your <span className="text-blue150">Account</span>
        </Typography>

        <Typography
          variant="body1"
          className="text-neutral-500 text-sm md:text-lg mt-4"
        >
          Tell us how you want to use MyEmployment and we&apos;ll tailor your
          experience to save your time.
        </Typography>

        <Typography
          variant="body1"
          className="text-black text-sm md:text-lg mt-4 font-aeonik-bold"
        >
          Which of the Following Option Describes Who are You? <br />
          Are you an Consumer Or Data Contributor? Or Verifier?
        </Typography>

        <FlexBox className="gap-4 my-6 flex-col 2xl:flex-row">
          {accountCardData.map(({ type, icon }, i) => (
            <FlexBox
              key={i}
              className={`group flex-col items-center gap-4  hover:bg-blue400 flex-1 text-center p-6 rounded-2xl border border-slate-300 transition-all duration-200 cursor-pointer relative ${accountSetupInfo.accountType === type ? "bg-blue400" : "bg-slate-200"}`}
              onClick={() =>
                setAccountSetupInfo((prev) => ({
                  ...prev,
                  accountType: type,
                  permissible_purposes:
                    type === "consumer"
                      ? {
                          for_employment_purposes: false,
                          by_written_instruction: false,
                          for_consumer_initiated_transaction: false,
                        }
                      : prev.permissible_purposes,
                }))
              }
            >
              <img
                draggable={false}
                src={icon}
                alt=""
                className="w-16 h-16 lg:w-min lg:h-auto"
              />
              <Typography
                variant="body1"
                className={`font-aeonik-bold text-base leading-tight text-blue400 group-hover:text-white ${accountSetupInfo.accountType === type && "text-white"}`}
              >
                I am <br />
                <span className="capitalize">{type}</span>
              </Typography>
              {accountSetupInfo.accountType === type && (
                <CheckCircleIcon className="absolute top-2 right-2 text-white" />
              )}
            </FlexBox>
          ))}
        </FlexBox>

        {accountSetupInfo.accountType !== "consumer" ? (
          <>
            <FlexBox className="w-full justify-between">
              <Typography
                variant="body1"
                className="text-blue400 font-aeonik-bold text-base md:text-lg"
              >
                Permissible Purpose
              </Typography>
              <InfoIcon className="text-blue400" />
            </FlexBox>

            <Typography
              variant="body1"
              className="text-neutral-500 text-sm md:text-lg mt-4"
            >
              As someone in background / Data Contributor Verification. <br />I
              have permission from the consumer to verify their information:
            </Typography>

            <FlexBox className="flex-col border-2 border-blue150 border-opacity-30 rounded-2xl my-6">
              {purposeData.map(({ common, title, content, key }, i) => (
                <FlexBox
                  key={i}
                  className={`${i !== purposeData.length - 1 && "border-b-2 border-blue150 border-opacity-30"} flex-col items-start`}
                >
                  {common && (
                    <FlexBox className="ms-10 mt-2 sm:mt-4 mb-0 sm:mb-2 bg-light250 items-center py-1 rounded-lg px-3 gap-1">
                      <StarIcon className="text-lg text-blue150" />
                      <Typography
                        variant="body1"
                        className="text-sm pt-1 text-blue400"
                      >
                        Most Common
                      </Typography>
                    </FlexBox>
                  )}
                  <FormControlLabel
                    label={
                      <FlexBox className="flex-col">
                        <Typography
                          variant="body1"
                          className="font-aeonik-bold text-sm sm:text-base text-start"
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="text-neutral-500 text-sm sm:text-base font-aeonik-light text-start"
                        >
                          {content}
                        </Typography>
                      </FlexBox>
                    }
                    control={
                      <Checkbox
                        className="text-blue150"
                        checked={
                          accountSetupInfo.permissible_purposes[
                            key as keyof typeof accountSetupInfo.permissible_purposes
                          ]
                        }
                        onChange={(e, checked) =>
                          setAccountSetupInfo((prev) => ({
                            ...prev,
                            permissible_purposes: {
                              ...prev.permissible_purposes,
                              [key]: checked,
                            },
                          }))
                        }
                      />
                    }
                    className="items-start p-2 md:p-4"
                  />
                </FlexBox>
              ))}
            </FlexBox>
          </>
        ) : (
          <Box className="h-auto xl:h-80 2xl:h-[450px]"></Box>
        )}

          <LoadingButton
                      fullWidth
                      variant="contained"
                      className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl"
                      onClick={handleSubmit}
                    >
                      Continue
                    </LoadingButton>
      </FlexBox>
    </FlexBox>
  );
}
