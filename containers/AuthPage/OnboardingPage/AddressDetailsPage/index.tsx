"use client";

import Autocomplete from "@mui/material/Autocomplete";
import MuiFormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Country, State } from "country-state-city";
import Joi from "joi";
import { SyntheticEvent, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";

import FlexBox from "@/components/Common/FlexBox";
import { OnboardingFooter } from "@/components/Common/Footer";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import { useNavigateWithLoading, useRole, useSchemaForm } from "@/hooks";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { AddressDetails } from "@/types";

const defaultValues = {
  country: "United States",
  home_address: "",
  city: "",
  state: "",
  zip_code: "",
};

function joiMessages() {
  return {
    "string.empty": "is required",
  };
}

const schema = Joi.object({
  country: Joi.string().required(),
  home_address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required().disallow("null"),
  zip_code: Joi.string().required(),
}).messages(joiMessages());

type ICountry = {
  label: string;
  code: string;
};

type IState = {
  label: string;
  code: string;
};

export default function AddressDetailsPage() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const isOptionEqualToValue = (
    option: ICountry | IState,
    value: ICountry | IState,
  ) => {
    return option.code === value.code;
  };

  const role = useRole();

  const {
    navigateWithLoadingContinue,
    isPendingContinue,
    navigateWithLoadingBack,
    isPendingBack,
  } = useNavigateWithLoading();

  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>({
    label: "United States",
    code: "US",
  });
  const [selectedState, setSelectedState] = useState<IState | null>(null);

  const { addressDetails, setAddressDetails } = useOnboarding();

  const countries: ICountry[] = Country.getAllCountries().map((country) => ({
    label: country.name,
    code: country.isoCode,
  }));

  const states: IState[] = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.code).map((state) => ({
        label: state.name,
        code: state.isoCode,
      }))
    : [];

   

  const handleCountryChange = (
    event: SyntheticEvent,
    value: ICountry | null,
  ) => {
    setSelectedCountry(value);
    setSelectedState(null);
    form.setValue("country", value?.label || "");
    addressDetails.state="";
  };

  const handleStateChange = (event: SyntheticEvent, value: IState | null) => {
    setSelectedState(value);
    form.setValue("state", value?.label || "");
  };

  useEffect(() => {
   if(addressDetails && selectedCountry){
      const currentState = states.find(state => state.label === addressDetails.state);
      if(currentState){
        setSelectedState(currentState);
        form.setValue("state", currentState.label);
      }else{
        setSelectedState(null);
        form.setValue("state", "")
      }
   }
   else
   {
    setSelectedState(null);
   }
  }, [selectedCountry]);

  useEffect(() => {
    if (addressDetails) {
      form.setValue("country", addressDetails.country);
      form.setValue("home_address", addressDetails.home_address);
      form.setValue("city", addressDetails.city);
      form.setValue("zip_code", addressDetails.zip_code);
      form.setValue("state", addressDetails.state);

      const currentCountry = countries.find(country => country.label === addressDetails.country);
     if(currentCountry){
       setSelectedCountry(currentCountry);
     }
    }
  }, [addressDetails]);

  const handleSubmit = form.handleSubmit((values) => {
    console.log("Form Submitted: ", values);
    setAddressDetails(values);
    navigateWithLoadingContinue("/auth/onboarding/security-questions");
  });

  function handleBack() {
    navigateWithLoadingBack("/auth/onboarding/consumer-info");
  }

  return (
    <FlexBox
      id="addressDetails"
      className="z-10 w-fll items-center justify-center flex-col"
    >
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-11/12 md:w-3/4 lg:w-2/3 4xl:w-1/3 text-center md:text-start gap-2 md:gap-4">
        <Typography
          variant="h2"
          className="text-blue150 font-aeonik-black text-2xl md:text-3xl px-3 py-2"
        >
          Thanks,{" "}
          <span className="text-blue400 font-aeonik-black">
            now a bit more Information...
          </span>
        </Typography>

        <Typography
          variant="body1"
          className="text-neutral-600 text-start text-sm md:text-lg mt-0 md:mt-4 px-3"
        >
          Please provide your address. This information Will be used to
          establish Your account and help verify Your identify.{" "}
          <span className="text-blue400 font-aeonik-medium">Learn More</span>
        </Typography>

        <FormProvider {...form}>
          <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            <FlexBox className="mb-2 text-start w-full flex-col">
              <Controller<AddressDetails, "country">
                name="country"
                render={({
                  field: { ref, value, onChange, ...field },
                  fieldState,
                }) => (
                  <MuiFormControl className="mb-2">
                    <FormLabel
                      className={`${
                        fieldState.error ? "text-red300" : "text-gray-700"
                      } font-aeonik-bold py-1 px-3 text-base text-start
                      `}
                    >
                      Country* {fieldState.error?.message || ""}
                    </FormLabel>

                    <Autocomplete
                      className="m-1 mb-2 sm:mb-4 min-h-11 items-center rounded-2xl"
                      options={countries}
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className="rounded-xl bg-light200"
                        />
                      )}
                      isOptionEqualToValue={isOptionEqualToValue}
                      ref={ref}
                      sx={(theme) => ({
                        "& .MuiInputBase-root": {
                          height: "48px",
                          [theme.breakpoints.up("tablet")]: {
                            height: "auto",
                          },
                        },
                      })}
                      {...field}
                    />
                  </MuiFormControl>
                )}
              />
            </FlexBox>

            <Controller<AddressDetails, "home_address">
              name="home_address"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-2 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`Home Address* ${fieldState.error?.message || ""}`}
                  autoFocus
                  labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                  inputStyle="m-1 bg-light200 rounded-lg"
                  outlinedInputStyle="h-auto"
                  multiline
                  rows={4}
                  {...field}
                />
              )}
            />

            <Controller<AddressDetails, "city">
              name="city"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-2 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`City* ${fieldState.error?.message || ""}`}
                  labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                  inputStyle="m-1 bg-light200 rounded-lg"
                  {...field}
                />
              )}
            />

            <FlexBox className="mb-2 text-start w-full gap-2 md:gap-6 flex-col md:flex-row">
              <FlexBox className="w-full md:w-1/2 flex-col">
                <FormLabel className="text-base font-aeonik-bold py-1 px-3 text-gray-700">
                  State*
                </FormLabel>

                <Autocomplete
                  className="m-1 min-h-11 items-center rounded-lg h-12 md:h-auto"
                  options={states}
                  value={selectedState}
                  onChange={handleStateChange}
                  disabled={!selectedCountry}
                  renderInput={(params) => (
                    <TextField {...params} className="bg-light200 rounded-xl" />
                  )}
                  isOptionEqualToValue={isOptionEqualToValue}
                  sx={(theme) => ({
                    "& .MuiInputBase-root": {
                      height: "48px",
                      [theme.breakpoints.up("tablet")]: {
                        height: "auto",
                      },
                    },
                  })}
                />
              </FlexBox>

              <Controller<AddressDetails, "zip_code">
                name="zip_code"
                render={({ field, fieldState }) => (
                  <FormControl
                    className="mb-0 sm:mb-4 text-start w-full md:w-1/2"
                    color={fieldState.error && "error"}
                    label={`Zip* ${fieldState.error?.message || ""}`}
                    labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                    inputStyle="m-1 bg-light200 rounded-lg"
                    {...field}
                  />
                )}
              />
            </FlexBox>

            <FlexBox className="gap-6">
              {role && role === "employee" && (
                <LoadingButton
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className="rounded-3xl text-white py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                  onClick={handleBack}
                  loading={isPendingBack}
                >
                  Back
                </LoadingButton>
              )}

              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                type="submit"
                loading={isPendingContinue}
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
