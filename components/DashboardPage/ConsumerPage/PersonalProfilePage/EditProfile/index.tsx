"use client";

import { useEffect } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import Autocomplete from "@mui/material/Autocomplete";
import MuiFormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { Country, State } from "country-state-city";
import Joi from "joi";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { SyntheticEvent, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import LoadingButton from "@/components/Common/LoadingButton";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import { useSchemaForm } from "@/hooks";
import { PersonalProfile } from "@/types";
import { useConsumerProfileGetDetails } from "@/api/requests/consumer/consumerProfileGetDetails";
import { useConsumerProfileUpdate } from "@/api/requests/consumer/consumerProfileUpdate";
import toast from "react-hot-toast";

const defaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  phoneNumbers: "",
  email: "",
  country: "",
  home_address: "",
  city: "",
  state: "",
  zip_code: "",
};

function joiMessages() {
  return {
    "string.empty": "is required",
    "tel.invalid": "is invalid",
  };
}

const schema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string().allow(""),
  lastName: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
    phoneNumbers: Joi.string()
    .allow("")
    .custom((value, helpers) =>
      matchIsValidTel(value) ? value : helpers.error("tel.invalid"),
    ),
  home_address: Joi.string().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip_code: Joi.string().required(),
}).options({allowUnknown: true}).messages(joiMessages());

type EditableFields = {
  [Key in keyof PersonalProfile]: boolean;
};

type ICountry = {
  label: string;
  code: string;
};

type IState = {
  label: string;
  code: string;
};

export default function EditProfile() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const { mutateAsync: getUserDetails } = useConsumerProfileGetDetails();
  const { mutateAsync: updateUserDetails, isPending: isPendingUpdateUser } = useConsumerProfileUpdate();

  const [editableFields, setEditableFields] = useState<EditableFields>({
    firstName: false,
    middleName: false,
    lastName: false,
    email: false,
    phoneNumbers: false,
    home_address: false,
    country: false,
    city: false,
    state: false,
    zip_code: false,
  });
  
  // address handle functions here
    
    const isOptionEqualToValue = (
        option: ICountry | IState,
        value: ICountry | IState,
      ) => {
        return option.code === value.code;
      };

      const [selectedCountry, setSelectedCountry] = useState<ICountry | null>({
        label: "United States",
        code: "US",
      });
      const [selectedState, setSelectedState] = useState<IState | null>(null);
    
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
      };
    
      const handleStateChange = (event: SyntheticEvent, value: IState | null) => {
        setSelectedState(value);
        form.setValue("state", value?.label || "");
      };


  const toggleEditable = (field: keyof PersonalProfile) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (values: PersonalProfile) => {
    try {
      await updateUserDetails(values);
      toast.success("Profile updated successfully");
      console.log("Profile updated successfully");
    } catch (error) {
      toast.error("Smomething went wrong");
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = "userId"; // Replace with actual user ID f7e284d4-ef12-46f6-87b5-c40539bdc4ed
        const response = await getUserDetails(userId);
        const data = response.data;

        form.setValue("firstName", data.firstName);
        form.setValue("middleName", data.middleName);
        form.setValue("lastName", data.lastName);
        form.setValue("phoneNumbers", data.phoneNumbers);
        form.setValue("email", data.email);
        form.setValue("country", data.country);
        form.setValue("home_address", data.home_address);
        form.setValue("city", data.city);
        form.setValue("state", data.state);
        form.setValue("zip_code", data.zip_code);
        const country = countries.find((c) => c.label === data.country);
        setSelectedCountry(country || null);
  
        if (country) {
          const states = State.getStatesOfCountry(country.code).map((state) => ({
            label: state.name,
            code: state.isoCode,
          }));
          const state = states.find((s) => s.label === data.state);
          setSelectedState(state || null);
        }
      
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    

    fetchData();
  }, [getUserDetails, form]);

  return (
    <FlexBox className="flex-col items-center xl:items-start bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Edit Profile
      </Typography>

      <FlexBox className="mt-2 mb-4 items-center gap-4">
        <PersonIcon className="w-20 h-20 bg-blue400 rounded-full text-white p-3" />

        <FlexBox className="gap-2 flex-col md:flex-row">
          <Button className="rounded-lg bg-blue400 text-white min-w-32">
            Change Picture
          </Button>
          <Button className="rounded-lg bg-gray-200 text-neutral-700 min-w-32">
            Delete Picture
          </Button>
        </FlexBox>
      </FlexBox>

      <FormProvider {...form}>
        <Form
          className="w-full flex flex-col mt-4 pb-10 md:pb-20 border-b-2 border-gray-200"
          onSubmit={form.handleSubmit(handleSubmit)}
          noValidate
        >
          <FlexBox className="w-full gap-4 md:gap-6 flex-col md:flex-row">
            <Controller<PersonalProfile, "firstName">
              name="firstName"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`First Name ${fieldState.error?.message || ""}`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={!editableFields.firstName}
                  endAdornment={
                    <IconButton
                      onClick={() => toggleEditable("firstName")}
                      className={clsx(
                        editableFields.firstName ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.firstName ? (
                        <CheckIcon className="text-xl text-white" />
                      ) : (
                        <BorderColorIcon className="text-xl" />
                      )}
                    </IconButton>
                  }
                  {...field}
                />
              )}
            />

            <Controller<PersonalProfile, "middleName">
              name="middleName"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  label={`Middle Name`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={!editableFields.middleName}
                  endAdornment={
                    <IconButton
                      onClick={() => toggleEditable("middleName")}
                      className={clsx(
                        editableFields.middleName ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.middleName ? (
                        <CheckIcon className="text-xl text-white" />
                      ) : (
                        <BorderColorIcon className="text-xl" />
                      )}
                    </IconButton>
                  }
                  {...field}
                />
              )}
            />

            <Controller<PersonalProfile, "lastName">
              name="lastName"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`Last Name ${fieldState.error?.message || ""}`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={!editableFields.lastName}
                  endAdornment={
                    <IconButton
                      onClick={() => toggleEditable("lastName")}
                      className={clsx(
                        editableFields.lastName ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.lastName ? (
                        <CheckIcon className="text-xl text-white" />
                      ) : (
                        <BorderColorIcon className="text-xl" />
                      )}
                    </IconButton>
                  }
                  {...field}
                />
              )}
            />
          </FlexBox>

          <FlexBox className="w-full gap-4 md:gap-6 flex-col md:flex-row">
            <Controller<PersonalProfile, "phoneNumbers">
              name="phoneNumbers"
              render={({ field, fieldState }) => (
                <MuiFormControl className="mb-1 w-full">
                  <FormLabel
                    className={`${
                      fieldState.error ? "text-red300" : "text-gray-700"
                    } font-aeonik py-1 px-3 text-base text-start flex items-center gap-2
                      `}
                  >
                    Phone Number {fieldState.error?.message || ""}{" "}
                  </FormLabel>

                  <MuiTelInput
                    defaultCountry="US"
                    color={fieldState.error ? "error" : undefined}
                    className="m-1 rounded-lg"
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
                    disabled={!editableFields.phoneNumbers}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={() => toggleEditable("phoneNumbers")}
                          className={clsx(
                            editableFields.phoneNumbers ? "bg-blue400" : "bg-none",
                          )}
                        >
                          {editableFields.phoneNumbers ? (
                            <CheckIcon className="text-xl text-white" />
                          ) : (
                            <BorderColorIcon className="text-xl" />
                          )}
                        </IconButton>
                      ),
                    }}
                    {...field}
                  />
                </MuiFormControl>
              )}
            />

            <Controller<PersonalProfile, "email">
              name="email"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`Email Address ${fieldState.error?.message || ""}`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={!editableFields.email}
                  endAdornment={
                    <IconButton
                      onClick={() => toggleEditable("email")}
                      className={clsx(
                        editableFields.email ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.email ? (
                        <CheckIcon className="text-xl text-white" />
                      ) : (
                        <BorderColorIcon className="text-xl" />
                      )}
                    </IconButton>
                  }
                  {...field}
                />
              )}
            />
          </FlexBox>

          <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
            <Controller<PersonalProfile, "country">
              name="country"
              render={({
                field: { ref, value, onChange, ...field },
                fieldState,
              }) => (
                <MuiFormControl className="mb-2 w-full">
                  <FormLabel
                    className={`${
                      fieldState.error ? "text-red300" : "text-gray-700"
                    } font-aeonik py-1 px-3 text-base text-start
                      `}
                  >
                    Country {fieldState.error?.message || ""}
                  </FormLabel>

                  <Autocomplete
                    className="mb-2 sm:mb-3 min-h-11 bg-light50 p-1 items-center rounded-xl"
                    options={countries}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    renderInput={(params) => (
                      <TextField {...params} className="rounded-lg" />
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

            <FlexBox className="mb-6 md:mb-0 w-full flex-col">
              <FormLabel className="text-base font-aeonik py-1 px-3 text-gray-700">
                State
              </FormLabel>

              <Autocomplete
                className="p-1 bg-light50 min-h-11 items-center rounded-lg h-12 md:h-auto"
                options={states}
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}
                renderInput={(params) => (
                  <TextField {...params} className="rounded-lg" />
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
          </FlexBox>

          <FlexBox className="w-full gap-4 md:gap-6 flex-col md:flex-row">
            <Controller<PersonalProfile, "city">
              name="city"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`City ${fieldState.error?.message || ""}`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={!editableFields.city}
                  endAdornment={
                    <IconButton
                      onClick={() => toggleEditable("city")}
                      className={clsx(
                        editableFields.city ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.city ? (
                        <CheckIcon className="text-xl text-white" />
                      ) : (
                        <BorderColorIcon className="text-xl" />
                      )}
                    </IconButton>
                  }
                  {...field}
                />
              )}
            />

            <Controller<PersonalProfile, "zip_code">
              name="zip_code"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`ZIP Code ${fieldState.error?.message || ""}`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={!editableFields.zip_code}
                  endAdornment={
                    <IconButton
                      onClick={() => toggleEditable("zip_code")}
                      className={clsx(
                        editableFields.zip_code ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.zip_code ? (
                        <CheckIcon className="text-xl text-white" />
                      ) : (
                        <BorderColorIcon className="text-xl" />
                      )}
                    </IconButton>
                  }
                  {...field}
                />
              )}
            />
          </FlexBox>

          <Controller<PersonalProfile, "home_address">
            name="home_address"
            render={({ field, fieldState }) => (
              <FormControl
                className="mb-2 sm:mb-4 text-start w-full"
                color={fieldState.error && "error"}
                label={`Home Address ${fieldState.error?.message || ""}`}
                autoFocus
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                inputStyle="m-1 rounded-lg p-1 bg-light50"
                outlinedInputStyle="h-auto"
                multiline
                rows={3}
                disabled={!editableFields.home_address}
                endAdornment={
                  <IconButton
                    onClick={() => toggleEditable("home_address")}
                    className={clsx(
                      editableFields.home_address ? "bg-blue400" : "bg-none",
                    )}
                  >
                    {editableFields.home_address ? (
                      <CheckIcon className="text-xl text-white" />
                    ) : (
                      <BorderColorIcon className="text-xl" />
                    )}
                  </IconButton>
                }
                {...field}
              />
            )}
          />
            <LoadingButton
                            variant="contained"
                            className="w-1/2 rounded-3xl py-2 font-aeonik-bold text-base mt-6"
                            type="submit"
                          >
Update User                          </LoadingButton>
        </Form>
      </FormProvider>

      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mb-2 pt-10 md:pt-20">
        Log of Recent Changes
      </Typography>

      <FlexBox className="w-full p-4 sm:p-6 md:p-8 flex-col justify-center items-start bg-light100 rounded-xl gap-6 my-4">
        <FlexBox className="w-full justify-between">
          <Typography className="text-base text-neutral-700">
            Last Updated
          </Typography>
          <Typography className="text-base text-neutral-700">
            14 March 2024
          </Typography>
        </FlexBox>

        <FlexBox className="gap-4">
          <IconButton className="p-2 md:p-4 rounded-xl border-2 border-solid border-slate150">
            <img
              draggable={false}
              src="/assets/img/dashboard/consumer/personalProfile/edit.png"
              alt=""
              className="w-6 md:w-min"
            />
          </IconButton>

          <Button className="border-2 rounded-xl border-solid text-base md:text-lg px-4 md:px-8 text-blue200 border-slate150 bg-[#e4eef8]">
            View Edit Details
          </Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
