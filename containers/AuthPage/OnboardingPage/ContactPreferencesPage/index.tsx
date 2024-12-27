"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import MuiFormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { isEqual } from "lodash";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { useEffect } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { useCheckPhone } from "@/api/requests/auth/check";
import { useProfile } from "@/api/requests/auth/me";
import { useUserOnboarding } from "@/api/requests/auth/onboarding";
import { useUpdatePhoneNumbers } from "@/api/requests/auth/phoneNumber";
import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import { OnboardingFooter } from "@/components/Common/Footer";
import Form from "@/components/Common/Form";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import {
  useNavigateWithLoading,
  useOnboardingStatus,
  useRole,
  useSchemaForm,
} from "@/hooks";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { useLogin } from "@/store/hooks/auth";
import { ContactPreferences } from "@/types";

const defaultValues = {
  phone_number: "",
};

function joiMessages() {
  return {
    "tel.invalid": "is invalid",
  };
}

const schema = Joi.object({
  phone_number: Joi.string()
    .allow("")
    .custom((value, helpers) =>
      matchIsValidTel(value) ? value : helpers.error("tel.invalid"),
    ),
}).messages(joiMessages());

export default function ContactPreferencesPage() {
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

  const onboard = useOnboardingStatus();
  const role = useRole();
  const login = useLogin();
  const { mutateAsync: requestOnboarding, isPending: isPendingOnboarding } =
    useUserOnboarding();
  const { mutateAsync: checkPhone, isPending: isPendingCheckPhone } =
    useCheckPhone();
  const { mutateAsync: updatePhone, isPending: isPendingUpdatePhone } =
    useUpdatePhoneNumbers();
  const { data: me } = useProfile();
  const { consumerInfo, addressDetails,securityQuestions, phoneNumbers, setPhoneNumbers } =
    useOnboarding();

  useEffect(() => {
    if (me) {
      setPhoneNumbers(me.phone_numbers || []);
    }
  }, [me]);

  const validateAndAddPhoneNumber = async (phoneNumber: string) => {
    if (!phoneNumber) {
      return " is required";
    }
    if (!matchIsValidTel(phoneNumber)) {
      return " is invalid";
    }
    if (phoneNumbers.find((item) => item.number === phoneNumber)) {
      return " is already added";
    }

    try {
      const res = await checkPhone({ phone_number: phoneNumber });
      if (res.phone_exists) {
        return " already exists";
      }

      const updatedPhoneNumbers = [
        ...phoneNumbers,
        { number: phoneNumber, is_primary: false },
      ];

      if (onboard) {
        await updatePhone({ phone_numbers: updatedPhoneNumbers });
      }

      setPhoneNumbers(updatedPhoneNumbers);
      return null;
    } catch (error) {
      toast.error(Message.SomethingWrong);
    }
  };

  const handlePhoneNumber = async () => {
    const phoneNumber = form.watch("phone_number");
    const errorMessage = await validateAndAddPhoneNumber(phoneNumber);
    if (errorMessage) {
      form.setError("phone_number", { message: errorMessage });
    } else {
      form.setValue("phone_number", "");
      form.clearErrors("phone_number");
      if (onboard) {
        toast.success(Message.UpdatePhoneSuccess);
      }
    }
  };

  const handleBack = () => {
    navigateWithLoadingBack("/auth/onboarding/security-questions");
  };

  const handleSubmit = form.handleSubmit(async (value) => {
    let updatedPhoneNumbers = [...phoneNumbers];

    if (value.phone_number) {
      const errorMessage = await validateAndAddPhoneNumber(value.phone_number);
      if (errorMessage) {
        form.setError("phone_number", { message: errorMessage });
        return;
      }
      updatedPhoneNumbers = [
        ...updatedPhoneNumbers,
        { number: value.phone_number, is_primary: false },
      ];
    }

    if (updatedPhoneNumbers.length == 0) {
      form.setError("phone_number", { message: " is required" });
      return;
    }

    try {
      if (onboard && !isEqual(updatedPhoneNumbers, me?.phone_numbers || [])) {
        await updatePhone({ phone_numbers: updatedPhoneNumbers });
        setPhoneNumbers(updatedPhoneNumbers);
        form.setValue("phone_number", "");
        toast.success(Message.UpdatePhoneSuccess);
      } else if (!onboard) {
        const baseFormValues = {
          address: addressDetails,
          phone_numbers: updatedPhoneNumbers,
          security_questions:securityQuestions
        };

        const onboardingFormValues =
          role === "consumer"
            ? { ...baseFormValues, employee_info: consumerInfo }
            : baseFormValues;

        await requestOnboarding(onboardingFormValues)
          .then((res) => {
            toast.success(Message.OnboardingSuccessful);
            login({ token: res.token });
          })
          .catch(toast.error);
      }

      navigateWithLoadingContinue("/auth/onboarding/contact-verification");
    } catch (error) {
      toast.error(Message.SomethingWrong);
    }
  });

  return (
    <FlexBox
      id="contactPreferences"
      className="z-10 w-fll items-center justify-center flex-col"
    >
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-11/12 md:w-3/4 lg:w-1/2 4xl:w-1/3 text-center md:text-start gap-2 md:gap-4">
        <Typography
          variant="h2"
          className="text-blue150 font-aeonik-black text-2xl md:text-3xl px-3 py-2"
        >
          How{"  "}
          <span className="text-blue400 font-aeonik-black">
            Can We Reach you?
          </span>
        </Typography>

        <Typography
          variant="body1"
          className="text-neutral-600 text-start text-sm md:text-lg mt-0 md:mt-4 px-3"
        >
          Please provide your personal contact preferences. This information
          will be used to verify your identity and help with login if you forget
          your Password in the future. Please ensure the information provided is
          readily accessible, as if may be used for delivery of a one-time
          passcord.{" "}
          <span className="text-blue400 font-aeonik-medium underline">
            Learn More
          </span>
        </Typography>

        <FormProvider {...form}>
          <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            <FlexBox className="flex-col mb-2 sm:mb-4">
              <Controller<ContactPreferences, "phone_number">
                name="phone_number"
                render={({ field, fieldState }) => (
                  <MuiFormControl className="mb-1">
                    <FormLabel
                      className={`${
                        fieldState.error ? "text-red300" : "text-gray-700"
                      } font-aeonik-bold py-1 px-3 text-base text-start flex items-center gap-2
                      `}
                    >
                      Personal Phone* {fieldState.error?.message || ""}{" "}
                      {isPendingCheckPhone && <CircularProgress size={16} />}
                    </FormLabel>

                    <MuiTelInput
                      defaultCountry="US"
                      color={fieldState.error ? "error" : undefined}
                      className="m-1 bg-light200 rounded-lg"
                      sx={
                        fieldState.error
                          ? ({ palette }) => ({
                              ".MuiOutlinedInput-notchedOutline": {
                                borderColor: palette.error.main,
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: `${palette.error.main} !important`,
                              },
                            })
                          : undefined
                      }
                      autoFocus
                      {...field}
                    />
                  </MuiFormControl>
                )}
              />

              <FlexBox className="px-3 cursor-pointer">
                <Button onClick={handlePhoneNumber} className="text-blue400">
                  Add another
                </Button>
              </FlexBox>

              {me ? (
                <>
                  {phoneNumbers.map((item, i) => (
                    <FlexBox
                      className="px-3 mb-1 items-center max-w-52 justify-between"
                      key={i}
                    >
                      <Typography className="mt-1">{item.number}</Typography>
                      <IconButton
                        className="bg-gray200 text-blue400 w-6 h-6"
                        onClick={() => {
                          setPhoneNumbers((prev) =>
                            prev.filter(
                              (value) => value.number !== item.number,
                            ),
                          );
                        }}
                      >
                        <DeleteIcon className="text-base" />
                      </IconButton>
                    </FlexBox>
                  ))}
                </>
              ) : (
                <CircularProgress size={24} className="ms-5" />
              )}
            </FlexBox>

            <FlexBox className="mb-2 text-start w-full flex-col">
              <FormLabel className="text-base font-aeonik-bold py-1 px-3 text-gray-700">
                Email*
              </FormLabel>
              <FlexBox className="m-1 p-4 min-h-11 border border-input items-center bg-light200 rounded-lg h-12 md:h-auto">
                {me ? me.email : <CircularProgress size={24} />}
              </FlexBox>
            </FlexBox>

            <FlexBox className="gap-6">
              <LoadingButton
                fullWidth
                variant="contained"
                color="secondary"
                className="rounded-3xl text-white py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                loading={isPendingBack}
                onClick={handleBack}
                disabled={onboard || false}
              >
                Back
              </LoadingButton>

              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                loading={
                  isPendingContinue ||
                  isPendingOnboarding ||
                  isPendingUpdatePhone
                }
                type="submit"
              >
                Continue
              </LoadingButton>
            </FlexBox>

            <Typography
              variant="body1"
              className="text-xs md:text-base text-center text-blue400 border-t border-neutral-500 pt-6 mt-10 md:mt-20 underline"
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
