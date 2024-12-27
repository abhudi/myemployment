"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Controller, FormProvider, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useNavigateWithLoading, useSchemaForm } from "@/hooks";
import { useForgotPasswordByEmail, useRequestAccountSecurityQuestion, useRequestAccountSecurityQuestionByEmail, useUpdateAccountSecurityQuestion } from "@/api/requests/user/accountSecurity";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import { Select, MenuItem, InputAdornment, Link } from "@mui/material";
import { SecurityQuestionsFormValues } from "@/api/types";
import { useRequestResetPassword } from "@/api/requests/auth/verify";
import { useSearchParams } from "next/navigation";

const defaultValues = {
  password:"",
  confirmPassword:""
};
type JoiMessageCredentials = {
    min?: number;
  };
  
  function joiMessages({ min }: JoiMessageCredentials = {}) {
    return {
      "string.empty": "is required",
      "string.min": `should be at least ${min} characters`,
      "any.only": "doesn't match",
      "string.pattern.base": "must include A-Z, a-z, 0-9 and symbol",
    };
  }
 
const schema = Joi.object({
  password: Joi.string()
  .min(8)
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).*$/,
  )
  .required(),
confirmPassword: Joi.any().valid(Joi.ref("password")),
}).messages(joiMessages({ min: 8 }));


export default function ResetPasswordPage() {
  
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema, 
  });
 

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams = useSearchParams()
 
  const token = searchParams.get('token');
  const email = searchParams.get('email');
  
    const { navigateWithLoadingContinue, isPendingContinue } =
    useNavigateWithLoading();

  const handleResetPasswordSubmit = form.handleSubmit(
    (values) => {
        requestResetPassword({email,newPassword:values.confirmPassword,token})
        .then((response) => {
            toast.success("Password reset successfully");
            navigateWithLoadingContinue("/auth/login");
          },(error)=>{
            toast.error(error);
          })
    }
    
  );

  const { mutateAsync: requestResetPassword, isPending: isPendingPasswordPassword } =
  useRequestResetPassword();


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
          <span className="text-blue400 font-aeonik-black">
          Reset Password
          </span>
        </Typography>

        <FormProvider {...form}>
          <Form className="flex flex-col" onSubmit={handleResetPasswordSubmit} noValidate>
             <FlexBox className="w-full flex-col">
             <Controller
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
            <Controller
                  name="confirmPassword"
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="mb-2 text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Confirm Password * ${fieldState.error?.message || ""}`}
                      labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                      inputStyle="m-1 bg-light200 rounded-lg"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <IconButton
                          onClick={() => setShowConfirmPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
           </FlexBox>
          



           

            <FlexBox className="gap-4 flex-col">
              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                type="submit"
                loading={
                  isPendingContinue ||
                  isPendingPasswordPassword
                }
              
              >
                Submit
              </LoadingButton>

            </FlexBox>

          </Form>
        </FormProvider>
        <FlexBox className="w-full justify-center">
              <Link href="/auth/login">
                <Typography className="text-center underline text-sm md:text-base  text-blue400 cursor-pointer">
                  Click here to login.
                </Typography>
              </Link>
            </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

