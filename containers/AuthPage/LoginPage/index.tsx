"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { jwtDecode } from "jwt-decode";
import { MuiOtpInput } from "mui-one-time-password-input";
import Link from "next/link";
import { useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { useUserLogin } from "@/api/requests/auth/login";
import { useLoginOTP } from "@/api/requests/auth/otp";
import {
  useSendEmailCode,
  useSendEmailCodeWithMFAToken,
  useVerifyEmailCode,
  useVerifyEmailCodeWithMFAToken,
} from "@/api/requests/auth/verify";
import { LoginFormValues, MfaLoginFormValues } from "@/api/types";
import FlexBox from "@/components/Common/FlexBox";
import { LoginFooter } from "@/components/Common/Footer/LoginFooter";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import { availableMfaMethods } from "@/constant/loginPage";
import Message from "@/enums/Message";
import { useNavigateWithLoading, useSchemaForm } from "@/hooks";
import { useLogin } from "@/store/hooks/auth";
import { maskEmail } from "@/utils/maskEmail";

const defaultValues = {
  email: "",
  password: "",
  otp: "",
  email_otp: "",
};

function joiMessages() {
  return {
    "string.empty": "is required",
    "string.email": "is invalid",
    "number.base": "must be a number",
    "number.integer": "must be an integer",
    "number.min": "must be a positive number",
    "number.max": "must be a 6-digit number",
  };
}

const schema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required(),
  otp: Joi.number().integer().min(0).max(999999).required().allow(""),
  email_otp: Joi.number().integer().min(0).max(999999).required().allow(""),
}).messages(joiMessages());

export default function LoginPage() {

  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const [mfaToken, setMFAToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginStep, setLoginStep] = useState<
    "credentials" | "mfaSelection" | "mfaVerification"
  >("credentials");
  const [selectedMfaMethod, setSelectedMfaMethod] = useState<string | null>(
    null,
  );
  const [mfaMethods, setMfaMethods] = useState<string[]>([]);

  const { navigateWithLoadingContinue, isPendingContinue } =
    useNavigateWithLoading();

  const { mutateAsync: requestLogin, isPending: isPendingLogin } =
    useUserLogin();
  const {
    mutateAsync: requestSendEmailCode,
    isPending: isPendingSendEmailCode,
  } = useSendEmailCodeWithMFAToken();
  const {
    mutateAsync: requestVerifyEmailCode,
    isPending: isPendingVerifyEmailCode,
  } = useVerifyEmailCodeWithMFAToken();
  const { mutateAsync: requestLoginOTP, isPending: isPendingLoginOTP } =
    useLoginOTP();

  const login = useLogin();

  const handleSubmit = form.handleSubmit(
    (values) => {
      if (loginStep === "credentials") {
        requestLogin(values)
          .then((res) => {
            const availableMfaMethods = res.available_mfa_methods || [];
            if(availableMfaMethods.length === 0) 
              {
                login({ token: res.token });
                const decoded = jwtDecode<{ onboard: string }>(res.token || "");

                if (!(decoded.onboard.toLocaleLowerCase() === "true")) {
                  return;
                }
                return;
              } 
              else
              {
                setMFAToken(res.mfa_token!);
                setMfaMethods(availableMfaMethods);
                setLoginStep("mfaSelection");
              }
          })
          .catch((error) => toast.error(error));
      } else if (loginStep === "mfaSelection") {
        if (selectedMfaMethod === "otp") {
          setLoginStep("mfaVerification");
        }
        if (selectedMfaMethod === "email") {
          requestSendEmailCode({mfa_token: mfaToken})
            .then(() => {
              toast.success(Message.EmailSent);
              setLoginStep("mfaVerification");
            })
            .catch((error) => toast.error(error));
        }
      } else if (loginStep === "mfaVerification") {
        if (selectedMfaMethod === "otp") {
          requestLoginOTP({ otp: values.otp, mfa_token: mfaToken })
            .then((res) => login({ token: res.data.token }))
            .then(() => navigateWithLoadingContinue("/dashboard"))
            .catch((error) => toast.error(error));
        } else if (selectedMfaMethod === "email") {
          requestVerifyEmailCode({ otp: values.email_otp, mfa_token: mfaToken })
            .then((res) => login({ token: res.token }))
            .then(() => navigateWithLoadingContinue("/dashboard"))
            .catch((error) => toast.error(error));
        }
      }
    },
    () => toast.error(Message.SomethingWrong),
  );

  const isMfaVerificationDisabled =
    loginStep === "mfaVerification" &&
    ((selectedMfaMethod === "otp" && form.watch("otp").length !== 6) ||
      (selectedMfaMethod === "email" && form.watch("email_otp").length !== 6));

  return (
    <FlexBox
      id="login"
      className="z-10 w-full items-center justify-center flex-col min-h-screen"
    >
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-11/12 md:w-2/3 lg:w-1/2 2xl:w-1/3 text-center md:text-start gap-2 md:gap-4">
        <Typography
          variant="h2"
          className="text-blue150 font-aeonik-medium text-2xl sm:text-3xl md:text-4xl 4xl:text-5xl px-3 py-2 text-center"
        >
          Welcome!
          <br />
          <span className="text-blue400 font-aeonik-black">
            Please Log In below.
          </span>
        </Typography>

        <FormProvider {...form}>
          <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            {loginStep === "credentials" && (
              <FlexBox className="w-full flex-col">
                <Controller<LoginFormValues, "email">
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="mb-2 sm:mb-4 text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Email* ${fieldState.error?.message || ""}`}
                      autoFocus
                      labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                      inputStyle="m-1 bg-light200 rounded-lg"
                      {...field}
                    />
                  )}
                />
                <Controller<LoginFormValues, "password">
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="mb-2 text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Password* ${fieldState.error?.message || ""}`}
                      labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                      inputStyle="m-1 bg-light200 rounded-lg"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
                <Link  href="/auth/forgot-password" >
                  <Typography className="text-blue400 text-end px-3 text-sm md:text-base ">
                    Forgot Password?
                  </Typography>
                </Link>
              </FlexBox>
            )}

            {loginStep === "mfaSelection" &&
              mfaMethods &&
              mfaMethods.length > 0 && (
                <FlexBox className="gap-6 flex-col">
                  <Typography className="text-blue400 font-aeonik-bold text-base text-center">
                    Select MFA Method
                  </Typography>
                  <RadioGroup
                    row
                    className="gap-2 flex-col items-start px-5"
                    value={selectedMfaMethod}
                    onChange={(e) => setSelectedMfaMethod(e.target.value)}
                  >
                    {mfaMethods.map((method, i) => (
                      <FormControlLabel
                        value={method}
                        control={<Radio />}
                        label={
                          availableMfaMethods[
                            method as keyof typeof availableMfaMethods
                          ]
                        }
                        key={i}
                      />
                    ))}
                  </RadioGroup>
                </FlexBox>
              )}

            {loginStep === "mfaVerification" && selectedMfaMethod === "otp" && (
              <Controller<MfaLoginFormValues, "otp">
                name="otp"
                render={({ field, fieldState }) => (
                  <>
                    <FormLabel
                      className={`${
                        fieldState.error ? "text-red300" : "text-gray-700"
                      } font-aeonik-bold py-1 px-3 text-base mb-4
                `}
                    >
                      OTP Code* {fieldState.error?.message || ""}
                    </FormLabel>
                    <MuiOtpInput
                      {...field}
                      length={6}
                      className="mb-6 gap-2 sm:gap-6 md:gap-8"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "7px !important",
                        },
                      }}
                    />
                  </>
                )}
              />
            )}

            {loginStep === "mfaVerification" &&
              selectedMfaMethod === "email" && (
                <>
                  <Typography className="mx-3">
                    Email code was sent to{" "}
                    <span className="text-blue400 font-aeonik-bold">
                      {maskEmail(form.watch("email"))}
                    </span>
                  </Typography>

                  <Controller<MfaLoginFormValues, "email_otp">
                    name="email_otp"
                    render={({ field, fieldState }) => (
                      <>
                        <FormLabel
                          className={`${
                            fieldState.error ? "text-red300" : "text-gray-700"
                          } font-aeonik-bold py-1 px-3 text-base mb-4
                      `}
                        >
                          Email OTP* {fieldState.error?.message || ""}
                        </FormLabel>
                        <MuiOtpInput
                          {...field}
                          length={6}
                          className="mb-6 gap-2 sm:gap-6 md:gap-8"
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

            <FlexBox className="gap-4 flex-col">
              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                type="submit"
                loading={
                  isPendingLogin ||
                  isPendingLoginOTP ||
                  isPendingSendEmailCode ||
                  isPendingVerifyEmailCode ||
                  isPendingContinue
                }
                disabled={
                  isMfaVerificationDisabled ||
                  (loginStep === "mfaSelection" && !selectedMfaMethod)
                }
              >
                {loginStep === "credentials"
                  ? "Login"
                  : loginStep === "mfaSelection"
                    ? "Continue"
                    : "Verify"}
              </LoadingButton>

              {loginStep === "mfaVerification" && (
                <Typography
                  onClick={() => setLoginStep("mfaSelection")}
                  className="text-center underline text-sm md:text-base  text-blue400 cursor-pointer"
                >
                  Not working?
                </Typography>
              )}
            </FlexBox>

            <Typography
              variant="body1"
              className="text-neutral-600 text-sm md:text-lg text-center mt-6 md:mt-10"
            >
              First Time User?{" "}
              <span className="font-aeonik-bold">Register Now!</span>
            </Typography>

            <FlexBox className="w-full justify-center">
              <Link href="/auth/register">
                <Typography className="text-center underline text-sm md:text-base  text-blue400 cursor-pointer">
                  Click here to register.
                </Typography>
              </Link>
            </FlexBox>
            <Typography
              variant="body1"
              className="text-xs md:text-base text-center text-blue400 border-t border-neutral-500 pt-6 mt-8 md:mt-14 underline"
            >
              Terms Of Use
            </Typography>
          </Form>
        </FormProvider>
      </FlexBox>

      <LoginFooter />
    
    </FlexBox>
  );
}
