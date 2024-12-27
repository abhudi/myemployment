"use client";

import CircularProgress from "@mui/material/CircularProgress";
import MUIFormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Joi from "joi";
import moment, { Moment } from "moment";
import { useEffect } from "react";
import { Controller, FormProvider } from "react-hook-form";

import { useProfile } from "@/api/requests/auth/me";
import FlexBox from "@/components/Common/FlexBox";
import { OnboardingFooter } from "@/components/Common/Footer";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import { useNavigateWithLoading, useSchemaForm } from "@/hooks";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { ConsumerInfo } from "@/types";

const defaultValues = {
  ssn: "",
  date_of_birth: "",
};

function joiMessages() {
  return {
    "string.empty": "is required",
    "string.pattern.base": "is invalid",
  };
}

const schema = Joi.object({
  ssn: Joi.string()
    .required()
    .pattern(/^\d{3}-\d{2}-\d{4}$/)
    .messages({
      "string.pattern.base": "must be in format XXX-XX-XXXX",
    }),
  date_of_birth: Joi.string()
    .required()
    .pattern(/^\d{4}-\d{2}-\d{2}$/),
}).messages(joiMessages());

export default function ConsumerInfoPage() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const { navigateWithLoadingContinue, isPendingContinue } =
    useNavigateWithLoading();
  const { consumerInfo, setConsumerInfo } = useOnboarding();
  const { data: me } = useProfile();

  useEffect(() => {
    form.setValue("ssn", consumerInfo.ssn);
    form.setValue("date_of_birth", consumerInfo.date_of_birth);
  }, [consumerInfo]);

  const handleSubmit = form.handleSubmit((values) => {
    if (values.date_of_birth === "Invalid date") {
      form.setError("date_of_birth", { message: " is invalid" });
      return;
    }
    setConsumerInfo((prev) => ({ ...prev, ssn: values.ssn }));
    navigateWithLoadingContinue("/auth/onboarding/address-details");
  });

  return (
    <FlexBox
      id="consumerInfo"
      className="z-10 w-fll items-center justify-center flex-col"
    >
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-11/12 md:w-3/4 lg:w-2/3 4xl:w-1/3 text-center gap-2 md:gap-4">
        <Typography
          variant="h2"
          className="text-blue150 text-2xl sm:text-3xl md:text-5xl py-2"
        >
          Let&apos;s{" "}
          <span className="text-blue400 font-aeonik-black">Get Started.</span>
        </Typography>

        <Typography
          variant="body1"
          className="text-neutral-600 text-start text-sm md:text-lg mt-0 md:mt-4 px-3"
        >
          Provide information below to register.{" "}
          <span className="text-blue400 font-aeonik-medium">Learn More</span>
        </Typography>

        <FlexBox className="mb-2 text-start w-full flex-col">
          <FormLabel className="text-base font-aeonik-bold py-1 px-3 text-gray-700">
            First Name*
          </FormLabel>
          <FlexBox className="m-1 p-4 min-h-11 border border-input items-center bg-light200 rounded-lg h-12 md:h-auto">
            {me ? me.first_name : <CircularProgress size={24} />}
          </FlexBox>
        </FlexBox>

        <FlexBox className="mb-2 text-start w-full flex-col">
          <FormLabel className="text-base font-aeonik-bold py-1 px-3 text-gray-700">
            Last Name*
          </FormLabel>
          <FlexBox className="m-1 p-4 min-h-11 border border-input items-center bg-light200 rounded-lg h-12 md:h-auto">
            {me ? me.last_name : <CircularProgress size={24} />}
          </FlexBox>
        </FlexBox>

        <FormProvider {...form}>
          <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            <Controller<ConsumerInfo, "ssn">
              name="ssn"
              render={({ field: { onChange, ...field }, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`SSN* ${fieldState.error?.message || ""}`}
                  autoFocus
                  labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                  inputStyle="m-1 bg-light200 rounded-lg"
                  placeholder="XXX-XX-XXXX"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 9) {
                      const formatted = value
                        .replace(/^(\d{3})/, "$1-")
                        .replace(/^(\d{3})-(\d{2})/, "$1-$2-")
                        .replace(/^(\d{3})-(\d{2})-(\d{4}).*/, "$1-$2-$3");
                      form.setValue("ssn", formatted);
                    }
                  }}
                  {...field}
                />
              )}
            />

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DemoContainer components={["DateRangePicker"]}>
                <Controller<ConsumerInfo, "date_of_birth">
                  name="date_of_birth"
                  render={({
                    field: { ref, value, onChange, ...field },
                    fieldState,
                  }) => (
                    <MUIFormControl className="mb-2">
                      <FormLabel
                        className={`${
                          fieldState.error ? "text-red300" : "text-gray-700"
                        } font-aeonik-bold py-1 px-3 text-base text-start
                      `}
                      >
                        Date of Birth* {fieldState.error?.message || ""}
                      </FormLabel>

                      <DatePicker
                        onChange={(m: Moment | null) => {
                          setConsumerInfo((prev) => ({
                            ...prev,
                            date_of_birth: moment(m).format("YYYY-MM-DD"),
                          }));
                        }}
                        value={moment(form.watch("date_of_birth"))}
                        className="m-1 bg-light200 rounded-lg mt-2"
                        sx={(theme) => ({
                          "& .MuiInputBase-root": {
                            height: "48px",
                            [theme.breakpoints.up("tablet")]: {
                              height: "auto",
                            },
                          },
                          ...(fieldState.error
                            ? {
                                ".MuiOutlinedInput-notchedOutline": {
                                  borderColor: `${theme.palette.error.main} !important`,
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: `${theme.palette.error.main} !important`,
                                },
                              }
                            : {}),
                        })}
                        disableFuture
                        inputRef={ref}
                        {...field}
                      />
                    </MUIFormControl>
                  )}
                />
              </DemoContainer>
            </LocalizationProvider>

            <LoadingButton
              fullWidth
              variant="contained"
              className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
              loading={isPendingContinue}
              type="submit"
              disabled={!me}
            >
              Continue
            </LoadingButton>

            {/* <Typography
              variant="body1"
              className="text-neutral-600 text-center text-sm md:text-lg my-4"
            >
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue400 font-aeonik-medium"
              >
                Log in Now
              </Link>
            </Typography> */}

            <Typography
              variant="body1"
              className="text-xs md:text-base text-blue400 border-t border-neutral-500 pt-6 mt-10 md:mt-20 underline"
            >
              Terms Of Use
            </Typography>
          </Form>
        </FormProvider>
      </FlexBox>

      <OnboardingFooter />
    </FlexBox>
  );
}
