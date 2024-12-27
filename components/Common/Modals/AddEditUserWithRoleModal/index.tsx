"use client";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Joi from "joi";
import { forwardRef, SyntheticEvent, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";
import { useHideModal } from "@/store/hooks/modal";

import FlexBox from "../../FlexBox";
import ModalContent from "../ModalContent";
import { sessionStorageUtil } from "@/utils/sessionStorageUtil";
import { Country, State } from "country-state-city";
import { FormLabel, Autocomplete, TextField, Box, MenuItem, Select } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import CheckIcon from "@mui/icons-material/Check";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import clsx from "clsx";
import MUIFormControl from "@mui/material/FormControl";
import MuiFormControl from "@mui/material/FormControl";
import { MyEmploymentUserFormModalValues, MyEmploymentUserFormValues } from "@/api/types/MyEmploymentUserFormValues";
import { useMyEmploymentAddUser } from "@/api/requests/dashboard/myEmploymentAddUser";
import { useMyEmploymentGetUserRoles } from "@/api/requests/dashboard/myEmploymentGetUserRoles";
import { useMyEmploymentUpdateUser } from "@/api/requests/dashboard/myEmploymentUpdateUser";


type ICountry = {
  label: string;
  code: string;
};

type IState = {
  label: string;
  code: string;
};


const defaultValues = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumbers: "",
    joiningDate: "",
    email: "",
    home_address: "",
    roleId: "",
    country: "",
    city: "",
    state: "",
    zip_code: "",
  };
  
  function joiMessages() {
    return {
      "string.empty": "is required",
      "string.email": "is invalid",
      "tel.invalid": "is invalid",
    };
  }
  
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    jobTitle: Joi.string().allow(""),
    roleId: Joi.string().required(),
    joiningDate: Joi.string()
      .allow("")
      .pattern(/^\d{4}-\d{2}-\d{2}$/),
      email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
      phoneNumbers: Joi.string().allow(""),
      home_address: Joi.string().allow(""),
    country: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip_code: Joi.string().required(),
  }).options({allowUnknown: true}).messages(joiMessages());
  
  type EditableFields = {
    [Key in keyof MyEmploymentUserFormValues]: boolean;
  };

export default forwardRef<HTMLInputElement, MyEmploymentUserFormModalValues>(
  function AddEditUserModal({user,action}, ref) {
    const form = useSchemaForm({
      mode: "onSubmit",
      defaultValues,
      schema,
    });


    const hideModal = useHideModal();

    const { mutateAsync:addUser, isPending: isPendingAddUser }: any = useMyEmploymentAddUser();
    const { mutateAsync: updateUser, isPending: isPendingUpdateUser } = useMyEmploymentUpdateUser();
    const { mutateAsync: getUserRoles } = useMyEmploymentGetUserRoles();
    const [roles, setRoles] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {

      getUserRoles().then((response) => {
        setRoles(response.data);
      });

    }, []);
   

    const handleSubmit = form.handleSubmit(
      (values) => {
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
      },
      () => toast.error(Message.SomethingWrong),
    );

  
  
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
  
  
  
      const [editableFields, setEditableFields] = useState<EditableFields>({
          id: !user,
          firstName: !user,
          lastName: !user,
          joiningDate: !user,
          jobTitle: !user,
          phoneNumbers: !user,
          email: !user,
          home_address: !user,
          roleId: !user,
          country: !user,
          city: !user,
          state: !user,
          zip_code: !user,
        });
      
      
  
        useEffect(() => {
          if (user) {
            form.setValue("firstName", user.firstName || "");
            form.setValue("lastName", user.lastName || "");
            form.setValue("jobTitle", user.jobTitle || "");
            form.setValue("phoneNumbers", user.phoneNumbers || "");
            form.setValue("joiningDate", user.joiningDate || "");
            form.setValue("email", user.email || "");
            form.setValue("home_address", user.home_address || "");
            form.setValue("city", user.city || "");
            form.setValue("state", user.state || "");
            form.setValue("zip_code", user.zip_code || "");
            form.setValue("roleId", user.roleId || "");
            form.setValue("country", user.country || "");
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
        
  
  
    const toggleEditable = (field: keyof EditableFields) => {
        setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
      };
    

    return (
      <ModalContent title={user? "Edit User" : "Add User"}
      ref={ref}>
        <FlexBox className="gap-4 justify-center min-w-[280px]">
          <FormProvider {...form}>
            <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
           
        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
          <Controller<MyEmploymentUserFormValues, "firstName">
            name="firstName"
            render={({ field, fieldState }) => (
              <FormControl
                className="text-start w-full"
                color={fieldState.error && "error"}
                label={`First Name ${fieldState.error?.message ?? ""}`}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.firstName)}
                endAdornment={
                  user && (
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
                  )
                }
                {...field}
              />
            )}
          />
          <Controller<MyEmploymentUserFormValues, "lastName">
            name="lastName"
            render={({ field, fieldState }) => (
              <FormControl
                className="mb-4 text-start w-full"
                color={fieldState.error && "error"}
                label={`Last Name ${fieldState.error?.message ?? ""}`}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.lastName)}
                endAdornment={
                  user && (
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
                  )
                }
                {...field}
              />
            )}
          />
        </FlexBox>
        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
          <Box className="w-full md:w-1/2">
          <Controller<MyEmploymentUserFormValues, "email">
            name="email"
            render={({ field, fieldState }) => (
              <FormControl
                className="text-start w-full"
                color={fieldState.error && "error"}
                label={`Email Address ${fieldState.error?.message ?? ""}`}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                {...field}
              />
            )}
          />
          </Box>
          <Box className="w-full md:w-1/2">
          <Controller<MyEmploymentUserFormValues, "roleId">
            name="roleId"
            render={({ field, fieldState }) => (
              <MUIFormControl className="text-start w-full">
                <FormLabel
                  className={`${
                    fieldState.error ? "text-red300" : "text-gray-700"
                  } text-base font-aeonik py-1 px-3`}
                >
                  Role {fieldState.error?.message || ""}
                </FormLabel>
                <Select {...field}>
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {role.name}
                </MenuItem>
              ))}
            </Select>
                
              </MUIFormControl>
            )}
          />
          </Box>
       
        </FlexBox>

        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
   

<Controller<MyEmploymentUserFormValues, "jobTitle">
            name="jobTitle"
            render={({ field, fieldState }) => (
              <FormControl
                className="text-start w-full"
                color={fieldState.error && "error"}
                label={`Job title ${fieldState.error?.message || ""}`}
                labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                outlinedInputStyle="h-auto"
                inputStyle="p-1 rounded-lg"
                disabled={ user && (!editableFields.jobTitle)}
                endAdornment={
                  user && (
                  <IconButton
                    onClick={() => toggleEditable("jobTitle")}
                    className={clsx(
                      editableFields.jobTitle ? "bg-blue400" : "bg-none",
                    )}
                  >
                    {editableFields.jobTitle ? (
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
          <Controller<MyEmploymentUserFormValues, "phoneNumbers">
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
                    disabled={ user && (!editableFields.phoneNumbers)}
                    InputProps={{
                      endAdornment: (
                        user && (
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
                        )
                      ),
                    }}
                    {...field}
                  />
                </MuiFormControl>
              )}
            />
        </FlexBox>

        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
        <Controller<MyEmploymentUserFormValues, "country">
              name="country"
              render={({
                field: { ref, value, onChange, ...field },
                fieldState,
              }) => (
                <MUIFormControl className="mb-2 w-full">
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

        <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
        <Controller<MyEmploymentUserFormValues, "city">
              name="city"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`City ${fieldState.error?.message || ""}`}
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

            <Controller<MyEmploymentUserFormValues, "zip_code">
              name="zip_code"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label={`ZIP Code ${fieldState.error?.message || ""}`}
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
          
          <Controller<MyEmploymentUserFormValues, "home_address">
            name="home_address"
            render={({ field, fieldState }) => (
              <FormControl
                className="text-start w-full"
                color={fieldState.error && "error"}
                label={`Address ${fieldState.error?.message ?? ""}`}
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
                  loading= {isPendingAddUser || isPendingUpdateUser}
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
