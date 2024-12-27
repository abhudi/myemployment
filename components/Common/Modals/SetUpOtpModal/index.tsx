"use client";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { forwardRef, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import QRCode from "react-qr-code";
import { HashLoader } from "react-spinners";

import { useUserLogin } from "@/api/requests/auth/login";
import { useProfile } from "@/api/requests/auth/me";
import { useAddMfaMethod } from "@/api/requests/auth/mfaMethod";
import { useCreateOTP, useVerifyOTP } from "@/api/requests/auth/otp";
import { LoginFormValues, OtpSetUpFormValues } from "@/api/types";
import { SetUpOTPFormValues } from "@/api/types";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";
import { useHideModal } from "@/store/hooks/modal";
import { OtpSecret } from "@/types";

import FlexBox from "../../FlexBox";
import ModalContent from "../ModalContent";

function joiMessages() {
  return {
    "string.empty": "is required",
  };
}

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  otp: Joi.string().required().allow(""),
}).messages(joiMessages());

const defaultValues = {
  email: "",
  password: "",
  otp: "",
};

export default forwardRef<HTMLInputElement, SetUpOTPFormValues>(
  function SetUpOtpModal({ action }, ref) {
    const form = useSchemaForm({
      mode: "onSubmit",
      defaultValues,
      schema,
    });

    const { data: me, isLoading: isLoadingMe } = useProfile();
    const { mutateAsync: requestLogin, isPending: isPendingLogin } =
      useUserLogin();
    const { mutateAsync: requestCreateOTP, isPending: isPendingCreateOTP } =
      useCreateOTP();
    const { mutateAsync: requestVerifyOTP, isPending: isPendingVerifyOTP } =
      useVerifyOTP();
    const {
      mutateAsync: requestAddMfaMethod,
      isPending: isPendingAddMfaMethod,
    } = useAddMfaMethod();

    useEffect(() => {
      if (me) {
        form.setValue("email", me.email);
      }
    }, [me]);

    const hideModal = useHideModal();
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(0);
    const [otpSecret, setOtpSecret] = useState<OtpSecret>({
      secret_key: "",
      provisioning_uri: "",
      backup_codes: [],
    });

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
    };

    const handleSubmit = form.handleSubmit(
      (values) => {
        if (step === 0) {
          requestLogin(values)
            .then(() => {
              setStep(1);
              requestCreateOTP().then((res) => setOtpSecret(res));
            })
            .catch((error) => {
              if (error === Message.InvalidPassword) {
                form.setError("password", { message: "is incorrect" });
              } else {
                toast.error(Message.SomethingWrong);
              }
            });
        } else if (step === 1) {
          requestVerifyOTP({ otp: values.otp })
            .then(() => {
              setStep(2);
              toast.success(Message.SetUpOtpSuccess);
            })
            .catch((error) => {
              if (error === Message.InvalidOTP) {
                form.setError("otp", { message: "is incorrect" });
              } else {
                toast.error(Message.SomethingWrong);
              }
            });
        } else {
          requestAddMfaMethod({ mfa_method: "otp" })
            .then(() => {
              toast.success(Message.AddMfaMethodSuccess);
              hideModal();
            })
            .catch(() => toast.error(Message.SomethingWrong));
        }
      },
      () => toast.error(Message.SomethingWrong),
    );

    return (
      <ModalContent title="Set Up OTP" ref={ref}>
        <FlexBox className="gap-4 justify-center min-w-[280px]">
          <FormProvider {...form}>
            <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
              {(step === 0 || isPendingCreateOTP) && (
                <FlexBox className="w-full flex-col">
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
                </FlexBox>
              )}

              {step === 1 && (
                <FlexBox className="w-full flex-col items-center gap-4">
                  <FlexBox className="w-52 h-52 justify-center items-center shadow-button rounded-xl p-3">
                    {otpSecret.provisioning_uri ? (
                      <QRCode value={otpSecret.provisioning_uri} />
                    ) : (
                      <HashLoader color="#1c2a59" />
                    )}
                  </FlexBox>

                  <Typography className="text-black text-center md:text-start text-sm md:text-base">
                    Your Two-factor Secret: <br />
                    <span className="text-blue400 font-aeonik-bold">
                      {otpSecret.secret_key}
                    </span>
                    <IconButton
                      onClick={() => copyToClipboard(otpSecret.secret_key)}
                      size="small"
                      className="ms-1 mb-1 text-blue400"
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Typography>

                  <Controller<OtpSetUpFormValues, "otp">
                    name="otp"
                    render={({ field, fieldState }) => (
                      <FormControl
                        className="mb-2 text-start w-full"
                        color={fieldState.error && "error"}
                        label={`Verify Code* ${fieldState.error?.message || ""}`}
                        labelStyle="text-base font-aeonik-bold py-1 px-1 text-gray-700"
                        inputStyle="m-1 bg-light200 rounded-lg"
                        {...field}
                      />
                    )}
                  />
                </FlexBox>
              )}

              {step === 2 && (
                <FlexBox className="w-full flex-col items-center">
                  <Typography className="text-black text-center md:text-start text-sm md:text-base">
                    Your Back-up Codes: <br />
                  </Typography>

                  <FlexBox className="relative w-full items-center flex-col gap-1 bg-slate-100 p-3 rounded-xl mt-2">
                    <IconButton
                      onClick={() =>
                        copyToClipboard(otpSecret.backup_codes.join("\n"))
                      }
                      size="small"
                      className="absolute bottom-1 right-1 text-blue400"
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                    {otpSecret.backup_codes.map((code) => (
                      <Typography key={code} className="text-blue400">
                        {code}
                      </Typography>
                    ))}
                  </FlexBox>
                </FlexBox>
              )}

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
                  loading={
                    isLoadingMe ||
                    isPendingLogin ||
                    isPendingVerifyOTP ||
                    isPendingAddMfaMethod
                  }
                >
                  {step === 0 ? "Set Up" : step === 1 ? "Confirm" : "Done"}
                </LoadingButton>
              </FlexBox>
            </Form>
          </FormProvider>
        </FlexBox>
      </ModalContent>
    );
  },
);
