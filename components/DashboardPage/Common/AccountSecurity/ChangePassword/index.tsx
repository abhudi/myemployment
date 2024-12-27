"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import LoadingButton from "@/components/Common/LoadingButton";
import { ChangePasswordFormValues } from "@/api/types";
import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";
import { useUserChangePassword } from "@/api/requests/user/changePassword";
const defaultValues = {
  old_password: "",
  new_password: "",
  confirm_new_password: "",
};

function joiMessages() {
  return {
    "string.empty": "is required",
    "any.only": "must match new password",
  };
}

const schema = Joi.object({
  old_password: Joi.string().required(),
  new_password: Joi.string().required(),
  confirm_new_password: Joi.string().valid(Joi.ref('new_password')).required(),
}).messages(joiMessages());

export default function ChangePassword() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync: requestChangePassword, isPending: isPendingChangePassword } =
      useUserChangePassword();

  const handleSubmit = form.handleSubmit(
    async (values) => {
      console.log(values);
      requestChangePassword(values)
          .then(() => {
            toast.success("Password changed successfully");
          })
          .catch(() => { toast.error("Failed to change password");
          });
    },
    (errors) => {
      if (errors) {
        const errorMessages = Object.values(errors).map(error => error.message).join(', ');
        toast.error(errorMessages);
      } else {
        toast.error("Please fix the errors in the form");
      }
    }
  );

  return (
    <FlexBox className="flex-col justify-start items-center xl:items-start bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-col items-center xl:items-start gap-4">
        <Typography className="gap-6 flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2">
          Change Your Password
        </Typography>

        <FormProvider {...form}>
          <Form
            className="flex w-full items-center md:items-start flex-col"
            onSubmit={handleSubmit}
            noValidate
          >
            <Controller<ChangePasswordFormValues, "old_password">
              name="old_password"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-2 text-start w-full"
                  color={fieldState.error && "error"}
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
                  placeholder="Type Current password"
                  {...field}
                />
              )}
            />

            <Controller<ChangePasswordFormValues, "new_password">
              name="new_password"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-2 text-start w-full "
                  color={fieldState.error && "error"}
                  inputStyle="m-1 bg-light200 rounded-lg"
                  type="password"
                  placeholder="Type New password"
                  {...field}
                />
              )}
            />

            <Controller<ChangePasswordFormValues, "confirm_new_password">
              name="confirm_new_password"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-2 text-start w-full"
                  color={fieldState.error && "error"}
                  inputStyle="m-1 bg-light200 rounded-lg"
                  type="password"
                  placeholder="Confirm New password"
                  {...field}
                />
              )}
            />

            <LoadingButton
                            fullWidth
                            variant="contained"
                            className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                            type="submit"
                            loading={
                              isPendingChangePassword
                            }
                            disabled={
                              isPendingChangePassword
                            }
                          >
                            Update
                          </LoadingButton>
          </Form>
        </FormProvider>
      </FlexBox>
    </FlexBox>
  );
}
