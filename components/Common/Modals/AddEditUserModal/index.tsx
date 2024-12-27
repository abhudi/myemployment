"use client";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Joi from "joi";
import { forwardRef, SyntheticEvent, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { OrganizationProfileFormValues } from "@/api/types";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";
import { useHideModal } from "@/store/hooks/modal";

import FlexBox from "../../FlexBox";
import ModalContent from "../ModalContent";
import { sessionStorageUtil } from "@/utils/sessionStorageUtil";
import { useOrganizationAddUser } from "@/api/requests/dashboard/organizationAddUser";
import { useOrganizationUpdateUser } from "@/api/requests/dashboard/organizationUpdateUser";
import { Country, State } from "country-state-city";
import { FormLabel, Autocomplete, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import CheckIcon from "@mui/icons-material/Check";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import clsx from "clsx";
import MUIFormControl from "@mui/material/FormControl";
import MuiFormControl from "@mui/material/FormControl";
import { OrganizationProfileFormModalValues } from "@/api/types/OrganizationProfileFormValues";
import { useCheckAccount } from "@/api/requests/auth/check";


type ICountry = {
  label: string;
  code: string;
};

type IState = {
  label: string;
  code: string;
};


const defaultValues = {
  id:"",
  email: "",
  first_name: "",
  last_name: "",
  job_title: "",
  phone_numbers: "",
  country: "",
    home_address: "",
    city: "",
    state: "",
    zip_code: "",
    signup_reason: "",
    company_name: "",
    username: ""
}

type JoiMessageCredentials = {
  min?: number;
};

function joiMessages({ min }: JoiMessageCredentials = {}) {
  return {
    "string.empty": "is required",
    "string.email": "is invalid",
    "email.unique": "is already registered",
  };
}

const schema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  job_title: Joi.string().allow(""),
  phone_numbers: Joi.string().allow(""),
  country: Joi.string().allow(""),
    home_address: Joi.string().allow(""),
    city: Joi.string().allow(""),
    state: Joi.string().allow(""),
    zip_code: Joi.string().allow(""),
}).options({allowUnknown: true}).messages(joiMessages());

type EditableFields = {
  email: boolean;
  first_name: boolean;
  last_name: boolean;
  phone_numbers: boolean;
  job_title: boolean;
  country: boolean;
    city: boolean;
    home_address: boolean;
    state: boolean;
    zip_code: boolean;
};

export default forwardRef<HTMLInputElement, OrganizationProfileFormModalValues>(
  function AddEditUserModal({user,action}, ref) {
    const form = useSchemaForm({
      mode: "onSubmit",
      defaultValues,
      schema,
    });


    const hideModal = useHideModal();
   
    const { mutateAsync: checkAccount, isPending:isCheckPending } = useCheckAccount();

  const handleValidation = form.handleSubmit(
    (values) =>
    {
      values.username = values.email;
      checkAccount({ email: values.email, username: values.username }).then(
        (res) => {
          if (res.email_exists) {
            if (res.is_allowed === false) {
              toast.error(Message.IsUnderReview);
            } else {
              form.setError("email", {
                message: " already exists",
              });
              toast.error(Message.EmailExists);
            }
          } else if (res.username_exists) {
            form.setError("username", {
              message: " already exists",
            });
            toast.error(Message.UsernameExists);
          } else {
          
            values.username = values.email;
            if (user) {
              updateUser({ ...values, id: user.id }).then(() => {
               toast.success("User updated successfully");
              });
            
           } else {
              addUser({
               ...values, // Spread form data
               organizationId:sessionStorageUtil.getOrganizationId(),
               organizationTypeId: sessionStorageUtil.getOrganizationTypeId(),
             }).then(() => {
               toast.success("User created successfully");
              });
            
           }
          }
        },
      )
    }
      ,
    (error) =>{
      toast.error(Message.SomeInvalidFields)
    },
  );

  const { mutateAsync:addUser, isPending: isPendingAddUser }: any = useOrganizationAddUser({
    organizationId:sessionStorageUtil.getOrganizationId(),
    organizationTypeId: sessionStorageUtil.getOrganizationTypeId(),
  });
  
  const { mutateAsync: updateUser, isPending: isPendingUpdateUser } = useOrganizationUpdateUser();
  
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
  
  
  
    useEffect(() => {
      if (user) {
        form.setValue("first_name", user.first_name || "");
        form.setValue("last_name", user.last_name || "");
        form.setValue("email", user.email || "");
        form.setValue("job_title", user.job_title || "");
        form.setValue("phone_numbers", user.phone_numbers || "");
        form.setValue("country", user.country || "");
        form.setValue("home_address", user.home_address || "");
        form.setValue("city", user.city || "");
        form.setValue("state", user.state || "");
        form.setValue("zip_code", user.zip_code || "");
        const country = countries.find((c) => c.label === user.country);
        setSelectedCountry(country || null);
  
        if (country) {
          const states = State.getStatesOfCountry(country.code).map((state) => ({
            label: state.name,
            code: state.isoCode,
          }));
          const state = states.find((s) => s.label === user.state);
          setSelectedState(state || null);
        }
      } else {
        form.reset(defaultValues);
        setSelectedCountry(null);
        setSelectedState(null);
      }
    }, [user, open]);
  
    const [editableFields, setEditableFields] = useState<EditableFields>({
      email: !user,
      first_name: !user,
      last_name: !user,
      job_title: !user,
      phone_numbers: !user,
      country: !user,
      home_address: !user,
      city: !user,
      state: !user,
      zip_code: !user,
    });
  
  
  
    const toggleEditable = (field: keyof EditableFields) => {
        setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
      };
  

    return (
      <ModalContent title={user? "Edit User" : "Add User"} ref={ref}>
        <FlexBox className="gap-4 justify-center min-w-[280px]">
          <FormProvider {...form}>
            <Form className="flex flex-col" onSubmit={handleValidation} noValidate>
            <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
          <Controller<OrganizationProfileFormValues, "first_name">
            name="first_name"
            render={({ field, fieldState }) => (
              <FormControl
                className="text-start w-full"
                color={fieldState.error && "error"}
                label={`First Name ${fieldState.error?.message ?? ""}`}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.first_name)}
                endAdornment={
                  user && (
                    <IconButton
                      onClick={() => toggleEditable("first_name")}
                      className={clsx(
                        editableFields.first_name ? "bg-blue400" : "bg-none",
                      )}
                    >
                      {editableFields.first_name ? (
                        <CheckIcon className="text-xl text-white" />
                      ) : (
                        <BorderColorIcon className="text-xl" />
                      )}
                    </IconButton>
                  )
                }
                {...field}
              />
            )}
          />
          <Controller<OrganizationProfileFormValues, "last_name">
            name="last_name"
            render={({ field, fieldState }) => (
              <FormControl
                className="mb-4 text-start w-full"
                color={fieldState.error && "error"}
                label={`Last Name ${fieldState.error?.message ?? ""}`}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.last_name)}

                endAdornment={
                  user && (
                  <IconButton
                    onClick={() => toggleEditable("last_name")}
                    className={clsx(
                      editableFields.last_name ? "bg-blue400" : "bg-none",
                    )}
                  >
                    {editableFields.last_name ? (
                      <CheckIcon className="text-xl text-white" />
                    ) : (
                      <BorderColorIcon className="text-xl" />
                    )}
                  </IconButton>
                  )
                }
                {...field}
              />
            )}
          />
           <Controller<OrganizationProfileFormValues, "job_title">
            name="job_title"
            render={({ field, fieldState }) => (
              <FormControl
                className="mb-4 text-start w-full"
                label={'Job Title'}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.job_title)}
                endAdornment={
                  user && (
                  <IconButton
                    onClick={() => toggleEditable("job_title")}
                    className={clsx(
                      editableFields.job_title ? "bg-blue400" : "bg-none",
                    )}
                  >
                    {editableFields.job_title ? (
                      <CheckIcon className="text-xl text-white" />
                    ) : (
                      <BorderColorIcon className="text-xl" />
                    )}
                  </IconButton>
                  )
                }
                {...field}
              />
            )}
          />
        </FlexBox>

        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
           <Controller<OrganizationProfileFormValues, "phone_numbers">
              name="phone_numbers"
              render={({ field, fieldState }) => (
                <MuiFormControl className="mb-1 w-full">
                  <FormLabel
                    className={`font-aeonik py-1 px-3 text-base text-start flex items-center gap-2
                      `}
                  >
                    Phone Number 
                  </FormLabel>

                  <MuiTelInput
                    defaultCountry="US"
                    className="m-1 rounded-lg"
                    disabled={ user && (!editableFields.phone_numbers)}
                    InputProps={{
                      endAdornment: (
                        user && (
                          <>
                        <IconButton
                          onClick={() => toggleEditable("phone_numbers")}
                          className={clsx(
                            editableFields.phone_numbers ? "bg-blue400" : "bg-none",
                          )}
                        >
                          {editableFields.phone_numbers ? (
                            <CheckIcon className="text-xl text-white" />
                          ) : (
                            <BorderColorIcon className="text-xl" />
                          )}
                        </IconButton>
                        
                        </>
                        )
                      ),
                    }}
                    {...field}
                  />
                </MuiFormControl>
              )}
            />


   <Controller<OrganizationProfileFormValues, "email">
            name="email"
            render={({ field, fieldState }) => (
              <FormControl
                className="text-start w-full"
                color={fieldState.error && "error"}
                label={`Email Address ${fieldState.error?.message ?? ""}`}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.email)}
                {...field}
              />
            )}
          />
        </FlexBox>

        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
        <Controller<OrganizationProfileFormValues, "country">
              name="country"
              render={({
                field: { ref, value, onChange, ...field },
                fieldState,
              }) => (
                <MUIFormControl className="mb-2 w-full">
                  <FormLabel
                    className={`font-aeonik py-1 px-3 text-base text-start
                      `}
                  >
                    Country
                  </FormLabel>

                  <Autocomplete
                    className="mb-2 sm:mb-3 min-h-11 bg-light50 p-1 items-center rounded-xl"
                    options={countries}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    renderInput={(params) => (
                      <TextField {...params} 
                      placeholder="Select Country"
                      className="rounded-lg" />
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
                  <TextField {...params}
                  placeholder="Select State"
                   className="rounded-lg" />
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

        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
        <Controller<OrganizationProfileFormValues, "city">
              name="city"
              render={({ field }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  label={`City`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={ user && (!editableFields.city)}

                  endAdornment={
                    user && (
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
                    )
                  }
                  {...field}
                />
              )}
            />

            <Controller<OrganizationProfileFormValues, "zip_code">
              name="zip_code"
              render={({ field }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  label={`ZIP Code`}
                  labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  disabled={ user && (!editableFields.zip_code)}
                  endAdornment={
                    user && (
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
                    )
                  }
                  {...field}
                />
              )}
            />
        </FlexBox>


        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-col">
         
          <Controller<OrganizationProfileFormValues, "home_address">
            name="home_address"
            render={({ field }) => (
              <FormControl
                className="text-start w-full"
                label={`Address`}
                multiline
                minRows={4}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.home_address)}
                endAdornment={
                  user && (
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
                  )
                }
                {...field}
              />
            )}
          />
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
                  loading= {isPendingAddUser || isPendingUpdateUser || isCheckPending}
                >
                  {user? "Update User" : "Add User"}
                </LoadingButton>
              </FlexBox>
            </Form>
          </FormProvider>
        </FlexBox>
      </ModalContent>
    );
  },
);
