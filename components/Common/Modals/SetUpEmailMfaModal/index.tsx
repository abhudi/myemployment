"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Joi from "joi";
import { forwardRef, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { useUserLogin } from "@/api/requests/auth/login";
import { useProfile } from "@/api/requests/auth/me";
import { useAddMfaMethod } from "@/api/requests/auth/mfaMethod";
import {
  useSendEmailCode,
  useVerifyEmailCode,
} from "@/api/requests/auth/verify";
import { LoginFormValues } from "@/api/types";
import { SetUpOTPFormValues } from "@/api/types";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";
import { useHideModal } from "@/store/hooks/modal";

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
  email_otp: Joi.string().required().allow(""),
}).messages(joiMessages());

const defaultValues = {
  email: "",
  password: "",
  email_otp: "",
};

export default forwardRef<HTMLInputElement, SetUpOTPFormValues>(
  function SetUpEmailMfaModal({ action }, ref) {
    const form = useSchemaForm({
      mode: "onSubmit",
      defaultValues,
      schema,
    });

    const { data: me, isLoading: isLoadingMe } = useProfile();
    const { mutateAsync: requestLogin, isPending: isPendingLogin } =
      useUserLogin();
    const {
      mutateAsync: requestAddMfaMethod,
      isPending: isPendingAddMfaMethod,
    } = useAddMfaMethod();
    const {
      mutateAsync: requestSendEmailCode,
      isPending: isPendingSendEmailCode,
    } = useSendEmailCode();
    const {
      mutateAsync: requestVerifyEmailCode,
      isPending: isPendingVerifyEmailCode,
    } = useVerifyEmailCode();

    useEffect(() => {
      if (me) {
        form.setValue("email", me.email);
      }
    }, [me]);

    const hideModal = useHideModal();
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(0);

    const handleSubmit = form.handleSubmit(
      (values) => {
        if (step === 0) {
          requestLogin(values)
            .then(() => {
              requestSendEmailCode().then(() => {
                toast.success(Message.EmailSent);
                setStep(1);
              });
            })
            .catch((error) => {
              if (error === Message.InvalidPassword) {
                form.setError("password", { message: "is incorrect" });
              } else {
                toast.error(Message.SomethingWrong);
              }
            });
        } else {
          requestVerifyEmailCode({
            otp: values.email_otp,
            mfa_token: "",
          })
            .then(() => {
              requestAddMfaMethod({ mfa_method: "email" })
                .then(() => {
                  toast.success(Message.AddMfaMethodSuccess);
                  hideModal();
                })
                .catch((error) => toast.error(error));
            })
            .catch((error) => toast.error(error));
        }
      },
      () => toast.error(Message.SomethingWrong),
    );

    return (
      <ModalContent title="Set Up Email MFA" ref={ref}>
        <FlexBox className="gap-4 justify-center min-w-[280px]">
          <FormProvider {...form}>
            <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
              <FlexBox className="w-full flex-col">
                {step === 0 && (
                  <Controller<LoginFormValues, "password">
                    name="password"
                    render={({ field, fieldState }) => (
                      <FormControl
                        className="mb-2 text-start w-full"
                        color={fieldState.error && "error"}
                        label={`Password* ${fieldState.error?.message || ""}`}
                        labelStyle="text-base font-aeonik-bold py-1 px-1 text-gray-700"
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
                )}

                {step === 1 && (
                  <Controller<LoginFormValues, "email_otp">
                    name="email_otp"
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
                )}
              </FlexBox>

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
                    isPendingAddMfaMethod ||
                    isPendingSendEmailCode ||
                    isPendingVerifyEmailCode
                  }
                >
                  {step === 0 ? "Confirm" : "Done"}
                </LoadingButton>
              </FlexBox>
            </Form>
          </FormProvider>
        </FlexBox>
      </ModalContent>
    );
  },
);
