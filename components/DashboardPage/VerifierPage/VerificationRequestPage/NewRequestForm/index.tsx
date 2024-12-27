"use client";

import Typography from "@mui/material/Typography";
import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import FormControl from "@/components/Common/FormControl";
import Form from "@/components/Common/Form";
import Joi from "joi";
import {MuiTelInput } from "mui-tel-input";
import { useSchemaForm } from "@/hooks";
import toast from "react-hot-toast";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckIcon from "@mui/icons-material/Check";
import Autocomplete from "@mui/material/Autocomplete";
import MuiFormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import { Country, State } from "country-state-city";
import { SyntheticEvent, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import { VerifierRequestForm } from "@/types/VerifierRequestForm";
import SwitchButtonWithLabel from "@/components/Common/SwitchButtonWithLabel";
import MUIFormControl from "@mui/material/FormControl";
import Message from "@/enums/Message";

const defaultValues = {
  firstName: "Kevin",
  lastName: "Jacks",
  email: "jacks@myemployment,com",
  mobileNo: "+1 234 567 8990",
  ssn: "789080879",
  country: "United States",
  nationalId: "I435",
  purposeOfVerification: "lorem ipsum dipsum",
};

type ICountry = {
  label: string;
  code: string;
};


function joiMessages() {
  return {
    "string.empty": "is required",
    "tel.invalid": "is invalid",
  };
}

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  mobileNo: Joi.string().required(),
  ssn: Joi.string().required(),
  nationalId: Joi.string().required(),
  country: Joi.string().required(),
  purposeOfVerification: Joi.string().required(),
}).messages(joiMessages());

type EditableFields = {
  [Key in keyof VerifierRequestForm]: boolean;
};

export default function NewRequestForm() {

  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const [activeOption, setActiveOption] = useState<"SSN" | "NationalId">(
    "SSN",
  );

  const isOptionEqualToValue = (
    option: ICountry,
    value: ICountry,
  ) => {
    return option.code === value.code;
  };

  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>({
    label: "United States",
    code: "US",
  });

  const handleCountryChange = (
    event: SyntheticEvent,
    value: ICountry | null,
  ) => {
    setSelectedCountry(value);
    form.setValue("country", value?.label || "");
  };

  const [editable, setEditable] = useState(false);

  const [editableFields, setEditableFields] = useState<EditableFields>({
    firstName: false,
    lastName: false,
    email: false,
    mobileNo: false,
    ssn: false,
    nationalId: false,
    country: false,
    purposeOfVerification: false,
  });

  const toggleEditable = (field: keyof VerifierRequestForm) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleValidation = form.handleSubmit(
    async (values) => {
      try {
        console.log("in handle walidation")
        // Close the modal on success
      } catch (err: any) {
        console.error('Error creating user:', err);

      }
    },
    (error) => {
      // Extract the invalid fields from the error object
      const invalidFields = Object.keys(error);

      // Show an error message for each invalid field
      if (invalidFields.length > 0) {
        // Customizing the error message
        const invalidFieldsMessage = invalidFields
          .map((field) => `${field} is invalid.`)
          .join(' '); // Create a string of invalid fields
        toast.error(`Some fields are invalid: ${invalidFieldsMessage}`);
      } else {
        toast.error(Message.SomeInvalidFields); // Default message if no specific fields are found
      }
    }
  );

  return (
    <FlexBox className="flex-col items-center 2xl:items-start bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 2xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        New Request Form
      </Typography>

      <Typography className="w-full text-neutral-700 text-xl my-4 text-center 2xl:text-start">
        Consumer Information
      </Typography>

      <FormProvider {...form}>
        <Form
          className="w-full flex flex-col mt-4 pb-10 md:pb-20 border-b-2 border-gray-200"
          onSubmit={handleValidation}
          noValidate
        >

          <FlexBox className="w-full flex-col">
            <FlexBox className="w-full flex-col md:flex-row gap-0 md:gap-4">
              <Controller<VerifierRequestForm, "firstName">
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

              <Controller<VerifierRequestForm, "lastName">
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

            <FlexBox className="w-full flex-col md:flex-row gap-0 md:gap-4">
              <Controller<VerifierRequestForm, "email">
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
              <Controller<VerifierRequestForm, "mobileNo">
                name="mobileNo"
                render={({ field, fieldState }) => (
                  <MuiFormControl className="mb-1 w-full">
                    <FormLabel
                      className={`${fieldState.error ? "text-red300" : "text-gray-700"
                        } font-aeonik py-1 px-3 text-base text-start flex items-center gap-2
                      `}
                    >
                      Mobile Number {fieldState.error?.message || ""}{" "}
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
                      disabled={!editableFields.mobileNo}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => toggleEditable("mobileNo")}
                            className={clsx(
                              editableFields.mobileNo ? "bg-blue400" : "bg-none",
                            )}
                          >
                            {editableFields.mobileNo ? (
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
            </FlexBox>
            <FlexBox className="w-full flex-col md:flex-row gap-0 md:gap-2 justify-around item-start">
            <FlexBox className="w-auto flex-col md:flex-row gap-0 md:gap-3 items-center my-3">
              <Typography className="text-neutral-700 text-lg text-start 2xl:text-start">
                PPI Type:
              </Typography>
              <SwitchButtonWithLabel
                checked={activeOption === "SSN"}
                setChecked={(newState) => {
                  setActiveOption(newState ? "SSN" : "NationalId");
                  setEditable(newState);
                }}
                labelStyle="violet-switch-label"
                labelFirst="SSN"
                labelSecond="National Id"
                wBase="150px"
                wBaseUpdate="150px"
              />
            </FlexBox>
            </FlexBox>
            <FlexBox className="w-full flex-col md:flex-row gap-0 md:gap-4">
              {activeOption === "SSN" ?
                <>
                  <Controller<VerifierRequestForm, "ssn">
                    name="ssn"
                    render={({ field, fieldState }) => (
                      <FormControl
                        className="mb-0 sm:mb-4 text-start w-full"
                        color={fieldState.error && "error"}
                        label={`SSN ${fieldState.error?.message || ""}`}
                        labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                        inputStyle="p-1 bg-light50 rounded-lg"
                        disabled={!editableFields.ssn}
                        endAdornment={
                          <IconButton
                            onClick={() => toggleEditable("firstName")}
                            className={clsx(
                              editableFields.ssn ? "bg-blue400" : "bg-none",
                            )}
                          >
                            {editableFields.ssn ? (
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

                </> : <>
                  <FlexBox className="w-full flex-col md:flex-row gap-0 md:gap-4">
                    <Controller<VerifierRequestForm, "country">
                      name="country"
                      render={({
                        field: { ref, value, onChange, ...field },
                        fieldState,
                      }) => (
                        <MUIFormControl className="mb-2 w-full">
                          <FormLabel
                            className={`${fieldState.error ? "text-red300" : "text-gray-700"
                              } font-aeonik py-1 px-3 text-base text-start
                      `}
                          >
                            Country {fieldState.error?.message || ""}
                          </FormLabel>

                          <Autocomplete
                            className="mb-2 sm:mb-3 min-h-11 bg-light50 p-1 items-center rounded-xl"
                            options={[]}
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
                        </MUIFormControl>
                      )}
                    />
                    <Controller<VerifierRequestForm, "nationalId">
                      name="nationalId"
                      render={({ field, fieldState }) => (
                        <FormControl
                          className="mb-0 sm:mb-4 text-start w-full"
                          color={fieldState.error && "error"}
                          label={`National Id ${fieldState.error?.message || ""}`}
                          labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                          inputStyle="p-1 bg-light50 rounded-lg"
                          disabled={!editableFields.nationalId}
                          endAdornment={
                            <IconButton
                              onClick={() => toggleEditable("firstName")}
                              className={clsx(
                                editableFields.nationalId ? "bg-blue400" : "bg-none",
                              )}
                            >
                              {editableFields.nationalId ? (
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
                </>}

            </FlexBox>

            <Controller<VerifierRequestForm, "purposeOfVerification">
              name="purposeOfVerification"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`Purpose of Verification ${fieldState.error?.message || ""}`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={!editableFields.purposeOfVerification}
                  endAdornment={
                    <IconButton
                      onClick={() => toggleEditable("purposeOfVerification")}
                      className={clsx(
                        editableFields.purposeOfVerification ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.purposeOfVerification ? (
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

          <Button type="submit" className="medium-blue-gradient px-8 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
            Submit Now
          </Button>
        </Form>
      </FormProvider>

    </FlexBox>
  );
}
