"use client";

import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { useProfile } from "@/api/requests/auth/me";
import {
  useSendCode,
  useSendEmailCode,
  useVerifyEmailCode,
  useVerifyOTP,
} from "@/api/requests/auth/verify";
import { VerifyEmailFormValues } from "@/api/types/VerifyEmailFormValues";
import FlexBox from "@/components/Common/FlexBox";
import { OnboardingFooter } from "@/components/Common/Footer";
import Form from "@/components/Common/Form";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useNavigateWithLoading, useSchemaForm } from "@/hooks";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { useLogin } from "@/store/hooks/auth";
import { ContactVerification } from "@/types";
import { maskEmail } from "@/utils/maskEmail";
import { maskPhoneNumber } from "@/utils/maskPhoneNumber";

const defaultValues = {
  phone_number: "",
  email_otp: "",
  phone_otp: ""
};

function joiMessages() {
  return {
    "string.empty": "is required",
    "number.base": "must be a number",
    "number.integer": "must be an integer",
    "number.min": "must be a positive number",
    "number.max": "must be a 6-digit number",
  };
}

const schema = Joi.object({
  phone_number: Joi.string().required(),
  email_otp: Joi.number().integer().min(0).max(999999).required().allow(""),
  phone_otp: Joi.number().integer().min(0).max(999999).required().allow(""),
}).messages(joiMessages());

export default function ContactVerificationPage() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const {
    navigateWithLoadingContinue,
    isPendingContinue,
    navigateWithLoadingBack,
    isPendingBack,
  } = useNavigateWithLoading();

  const { data: me } = useProfile();
  const login = useLogin();
  const { phoneNumbers, setPhoneNumbers } = useOnboarding();
  const { mutateAsync: sendCode, isPending: isPendingSendCode } = useSendCode();
  const { mutateAsync: verifyOTP, isPending: isPendingVerifyOTP } =
  useVerifyOTP();
  const { mutateAsync: sendEmailCode, isPending: isPendingSendEmailCode } =
    useSendEmailCode();
  const { mutateAsync: verifyEmailCode, isPending: isPendingVerifyEmailCode } =
    useVerifyEmailCode();

  const [isSentCode, setIsSentCode] = useState(false);

  useEffect(() => {
    if (me) {
      setPhoneNumbers(me.phone_numbers || []);
    }
  }, [me]);

  function handleBack() {
    navigateWithLoadingBack("/auth/onboarding/contact-preferences");
  }

  const handleSubmit = form.handleSubmit((values) => {
    
    if (!isSentCode) {
      sendCode(values)
        .then(() => {
          toast.success(Message.SendCodeSuccess);
          setIsSentCode(true);
        })
        .catch(toast.error);
    } else {
      if (values.email_otp === "" || values.phone_otp === "") {
        if (values.email_otp === "") {
          form.setError("email_otp", { message: " is required" });
        }
        if (values.phone_otp === "") {
          form.setError("phone_otp", { message: " is required" });
        }
        return;
      }

     

      verifyOTP(values)
        .then((res) => {
          toast.success(Message.VerificationSuccess);
          login({ token: res.token });
          navigateWithLoadingContinue("/dashboard");
        })
        .catch(toast.error);
    }
  },(error)=>{
  });

  return (
    <FlexBox
      id="contactVerification"
      className="z-10 w-fll items-center justify-center flex-col"
    >
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-11/12 md:w-3/4 lg:w-1/2 4xl:w-1/3 text-center md:text-start gap-2 md:gap-4">
        <img
          draggable={false}
          src="/assets/img/auth/onboarding/contactVerification/icon.png"
          alt=""
          className="w-min mx-auto my-10"
        />

        <Typography
          variant="body1"
          className="text-neutral-600 text-start text-sm md:text-lg mt-0 md:mt-4 px-3"
        >
          We&apos;ll need to send a one-time passcode to verify your account
          information. Please select where you would like the one-time passcode
          to be sent:
        </Typography>

        <FormProvider {...form}>
          <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            {!isSentCode ? (
              <FlexBox className="mb-2 text-start w-full flex-col">
                <FormLabel className="text-base font-aeonik-bold py-1 px-3 text-gray-700">
                  Email*
                </FormLabel>
                <FlexBox className="m-1 p-4 min-h-11 border border-input items-center bg-light200 rounded-lg h-12 md:h-auto">
                  {me ? maskEmail(me.email) : <CircularProgress size={24} />}
                </FlexBox>
              </FlexBox>
            ) : (
              <>
                <Typography className="mx-3">
                  Email code was sent to{" "}
                  <span className="text-blue400 font-aeonik-bold">
                    {me && maskEmail(me.email)}
                  </span>
                </Typography>

                <Controller<ContactVerification, "email_otp">
                  name="email_otp"
                  render={({ field, fieldState }) => (
                    <>
                      <FormLabel
                        className={`${
                          fieldState.error ? "text-red300" : "text-gray-700"
                        } font-aeonik-bold py-1 px-3 text-base
                      `}
                      >
                        Email OTP* {fieldState.error?.message || ""}
                      </FormLabel>
                      <MuiOtpInput
                        {...field}
                        length={6}
                        className="mb-6 gap-2 sm:gap-6 md:gap-10"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "7px !important",
                          },
                        }}
                      />
                    </>
                  )}
                />
              </>
            )}

            {!isSentCode ? (
              <Controller<ContactVerification, "phone_number">
                name="phone_number"
                render={({ fieldState }) => (
                  <FlexBox className="flex-col">
                    <FormLabel
                      className={`${
                        fieldState.error ? "text-red300" : "text-gray-700"
                      } font-aeonik-bold py-1 px-3 text-base text-start flex items-center gap-2
                      `}
                    >
                      Phone* {fieldState.error?.message || ""}
                    </FormLabel>
                    {me ? (
                      <RadioGroup
                        row
                        className="gap-2 flex-col px-3"
                        value={form.watch("phone_number")}
                        onChange={(e) =>
                          form.setValue("phone_number", e.target.value)
                        }
                      >
                        {phoneNumbers.map(({ number }, i) => (
                          <FormControlLabel
                            value={number}
                            control={<Radio />}
                            label={maskPhoneNumber(number)}
                            key={i}
                          />
                        ))}
                      </RadioGroup>
                    ) : (
                      <CircularProgress size={24} className="ms-5" />
                    )}
                  </FlexBox>
                )}
              />
            ) : (
              <>
                <Typography className="mx-3">
                  Phone code was sent to{" "}
                  <span className="text-blue400 font-aeonik-bold">
                    {me && maskPhoneNumber(form.watch("phone_number"))}
                  </span>
                </Typography>

                <Controller<ContactVerification, "phone_otp">
                  name="phone_otp"
                  render={({ field, fieldState }) => (
                    <>
                      <FormLabel
                        className={`${
                          fieldState.error ? "text-red300" : "text-gray-700"
                        } font-aeonik-bold py-1 px-3 text-base
                      `}
                      >
                        Phone OTP* {fieldState.error?.message || ""}
                      </FormLabel>
                      <MuiOtpInput
                        {...field}
                        length={6}
                        className="gap-2 sm:gap-6 md:gap-10"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "7px !important",
                          },
                        }}
                      />
                    </>
                  )}
                />
              </>
            )}

            <LoadingButton
              fullWidth
              variant="contained"
              className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
              loading={
                isPendingSendCode ||
                isPendingVerifyOTP ||
                isPendingContinue
              }
              type="submit"
            >
              {isSentCode ? "Verify Code" : "Send Code"}
            </LoadingButton>

            {!isPendingBack ? (
              <Typography
                variant="body1"
                className="text-xs md:text-base text-center text-neutral-600 pt-6 cursor-pointer"
                onClick={handleBack}
              >
                None of these Options Work for Me
              </Typography>
            ) : (
              <CircularProgress size={24} className="mx-auto mt-6" />
            )}
          </Form>
        </FormProvider>
      </FlexBox>

      <OnboardingFooter />
    </FlexBox>
  );
}
