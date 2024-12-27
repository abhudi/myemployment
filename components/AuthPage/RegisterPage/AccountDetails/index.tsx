"use client";

import Typography from "@mui/material/Typography";
import MuiFormControl from "@mui/material/FormControl";
import Joi from "joi";
import { SyntheticEvent, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { useCheckAccount } from "@/api/requests/auth/check";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";
import { useRegister } from "@/providers/RegisterProvider";
import { AccountDetails, AccountType } from "@/types";
import { Autocomplete, FormLabel, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRegisterDataContributor } from "@/api/requests/auth/register/dataContributor/auth";
import { useRegisterConsumer } from "@/api/requests/auth/register/employee/auth";
import { useRegisterVerifier, useRequestVerifierAgencyTypes } from "@/api/requests/auth/register/verifier/auth";
import { ContinuousColorLegend } from "@mui/x-charts";
import { CommonDropdownValues } from "@/api/types/CommonDropdownValues";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  job_title: "",
  company_name: "",
  signup_reason: "",
  verifierAgencyTypeId:0
};

type JoiMessageCredentials = {
  min?: number;
};

function joiMessages({ min }: JoiMessageCredentials = {}) {
  return {
    "string.empty": "is required",
    "string.email": "is invalid",
    "email.unique": "is already registered",
    'any.required': 'is required',
    'any.invalid': 'is required',

    // "string.min": `should be at least ${min} characters`,
    // "any.only": "doesn't match",
    // "string.pattern.base": "must include A-Z, a-z, 0-9 and symbol",
  };
}

const consumerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
}).options({allowUnknown: true}).messages(joiMessages({ min: 8 }));

const employerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  job_title: Joi.string().required(),
  company_name: Joi.string().required(),
  signup_reason: Joi.string().required(),
}).options({allowUnknown: true}).messages(joiMessages({ min: 8 }));

const verifierSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  job_title: Joi.string().required(),
  company_name: Joi.string().required(),
  signup_reason: Joi.string().required(),
  verifierAgencyTypeId: Joi.number().not(0),
}).options({allowUnknown: true}).messages(joiMessages({ min: 8 }));

export default function AccountDetailsPage() {

  const { step, setStep, accountDetails, setAccountDetails,accountSetupInfo ,setAccountSetupInfo} = useRegister();
  
  const getJOIValidationSchemaByType = (accountType: AccountType) => {
    switch (accountType) {
      case "consumer":
        return consumerSchema;
      case "dataContributor":
        return employerSchema;
      case "verifier":
        return verifierSchema;
    }
  };

  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema: getJOIValidationSchemaByType(accountSetupInfo.accountType as AccountType)
  });


 const { mutateAsync: checkAccount, isPending:isCheckPending } = useCheckAccount();
  const { mutateAsync: registerConsumer, isPending: isConsumerPending } =
    useRegisterConsumer();
  const {
    mutateAsync: registerDataContributor,
    isPending: isDataContributorPending,
  } = useRegisterDataContributor();
  const { mutateAsync: registerVerifier, isPending: isVerifierPending } =
    useRegisterVerifier();

    const { mutateAsync: requestVerifierAgencyTypes, isPending: isRequestVerifierAgencyTypesPending } =
     useRequestVerifierAgencyTypes();

     const [verifierAgencyTypes,setVerifierAgencyTypes]= useState<CommonDropdownValues[]>([]);

    
  const registrationHandlers = {
    consumer: registerConsumer,
    dataContributor: registerDataContributor,
    verifier: registerVerifier,
  };

  

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
           const registerFunction =
      registrationHandlers[accountSetupInfo.accountType as AccountType];

    if (!registerFunction) {
      toast.error(Message.InvalidAccountType);
      return;
    }
            values.username = values.email;
            setAccountDetails(values);
             registerFunction({ ...values, ...accountSetupInfo })
                  .then(() => toast.success(Message.AccountSetupSuccess))
                  .then(() => setStep(3))
                  .catch(toast.error);
          }
        },
      )
    }
      ,
    (error) =>{
      toast.error(Message.SomeInvalidFields)
    },
  );

  useEffect(() => {
    form.setValue("first_name", accountDetails.first_name);
    form.setValue("last_name", accountDetails.last_name);
    form.setValue("email", accountDetails.email);
    form.setValue("username", accountDetails.email);
    form.setValue("job_title", accountDetails.job_title);
    form.setValue("company_name", accountDetails.company_name);
    form.setValue("signup_reason", accountDetails.signup_reason);
    form.setValue("verifierAgencyTypeId", accountDetails.verifierAgencyTypeId);
  
  }, [accountDetails]);

  useEffect(() => { 
    requestVerifierAgencyTypes().then((res) => {
      setVerifierAgencyTypes(res.data);
    },(error) => {
      toast.error(Message.SomethingWrong);
    });

  }, []);

  const [selectedVerifierAgencyType, setSelectedVerifierAgencyType] = useState<CommonDropdownValues | null>(null);

  const handleVerifierAgencyTypeChange = (event: SyntheticEvent, value: any) => {
    form.setValue("verifierAgencyTypeId", value?.value || "");
    setSelectedVerifierAgencyType(value);

  };

  return (
    <FlexBox className="rounded-card w-11/12 2xl:w-4/5 bg-white z-10 shadow-lg relative mt-32">
        <FlexBox className="absolute top-0 left-1/2 -translate-x-1/2 xl:-translate-x-0 -translate-y-1/2">
        <FlexBox className="items-center gap-2">
        <IconButton
            size="small"
            className="border-2 border-blue150 border-solid border-opacity-50 bg-white"
            onClick={() => setStep(1)}
          >
            <ArrowBackIcon className="text-blue150 text-sm sm:text-2xl" />
          </IconButton>
          <Typography className="bg-blue150 text-sm sm:text-base text-white px-4 sm:px-8 py-1 sm:py-2 rounded-3xl font-aeonik-bold">
            Step {step} of 2
          </Typography>
        </FlexBox>
      </FlexBox>
    
      <img
        draggable={false}
        src="/assets/img/auth/register/step1.png"
        alt=""
        className="w-2/5 min-w-[500px] hidden xl:block"
      />

      <FlexBox className="w-full flex-col mx-4 md:mx-12 my-5 md:my-10">
        <Typography
          variant="h2"
          className="text-blue400 text-2xl sm:text-3xl md:text-[40px] font-aeonik-black py-2 text-center sm:text-start"
        >
          A few details
        </Typography>

        <Typography
          variant="body1"
          className="text-neutral-500 text-sm md:text-lg text-center sm:text-start"
        >
          Tell us about yourself to set up your MyEmployment Account.
        </Typography>

        <FormProvider {...form}>
          <Form
            className="flex flex-col"
            onSubmit={handleValidation}
            noValidate
          >
            <FlexBox className="w-full justify-between gap-0 sm:gap-4 flex-col sm:flex-row">
              <Controller<AccountDetails, "first_name">
                name="first_name"
                render={({ field, fieldState }) => (
                  <FormControl
                    className="mb-0 sm:mb-4 text-start w-full sm:w-1/2"
                    color={fieldState.error && "error"}
                    label={`First Name ${fieldState.error?.message ?? ""}`}
                    autoFocus
                    labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                    inputStyle="p-1 bg-light50 rounded-lg"
                    {...field}
                  />
                )}
              />

              <Controller<AccountDetails, "last_name">
                name="last_name"
                render={({ field, fieldState }) => (
                  <FormControl
                    className="mb-0 sm:mb-4 text-start w-full sm:w-1/2"
                    color={fieldState.error && "error"}
                    label={`Last Name ${fieldState.error?.message ?? ""}`}
                    labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                    inputStyle="p-1 bg-light50 rounded-lg"
                    {...field}
                  />
                )}
              />
            </FlexBox>

            <FlexBox className="w-full justify-between gap-0 sm:gap-4 flex-col sm:flex-row">
              <Controller<AccountDetails, "email">
                name="email"
                render={({ field, fieldState }) => (
                  <FormControl
                    className="mb-0 sm:mb-4 text-start w-full"
                    color={fieldState.error && "error"}
                    label={`Email ${fieldState.error?.message ?? ""}`}
                    labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                    inputStyle="p-1 bg-light50 rounded-lg"
                    {...field}
                  />
                )}
              />

            
            </FlexBox>

            <FlexBox className="w-full justify-between gap-0 sm:gap-4 flex-col sm:flex-row">
             {accountSetupInfo.accountType as AccountType !== "consumer" && (
              <Controller<AccountDetails, "job_title">
              name="job_title"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-0 sm:mb-4 text-start w-full sm:w-1/2"
                  color={fieldState.error && "error"}
                  label={`Job Title ${fieldState.error?.message ?? ""}`}
                  labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  {...field}
                />
              )}
            />
             )
             
             } 

            {accountSetupInfo.accountType as AccountType !== "consumer" && (
              <Controller<AccountDetails, "company_name">
                            name="company_name"
                            render={({ field, fieldState }) => (
                              <FormControl
                                className="mb-0 sm:mb-4 text-start w-full sm:w-1/2"
                                color={fieldState.error && "error"}
                                label={`Company Name ${fieldState.error?.message ?? ""}`}
                                labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                                inputStyle="p-1 bg-light50 rounded-lg"
                                {...field}
                              />
                            )}
                          />
            )}  
            </FlexBox>
            {accountSetupInfo.accountType == "verifier" && (
          <Controller<AccountDetails, "verifierAgencyTypeId">
          name="verifierAgencyTypeId"
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
                Verifier Agency Type {fieldState.error?.message || ""}
              </FormLabel>

              <Autocomplete
                className="m-1 mb-2 sm:mb-4 min-h-11 items-center rounded-2xl"
                options={verifierAgencyTypes}
                getOptionLabel={(option) => option.text}
                value={selectedVerifierAgencyType}
                onChange={handleVerifierAgencyTypeChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Verifier Agency Type"
                    className="rounded-xl bg-light200"
                  />
                )}
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

          
        )} 
            {accountSetupInfo.accountType as AccountType !== "consumer" && ( <Controller<AccountDetails, "signup_reason">
              name="signup_reason"
              render={({ field, fieldState }) => (
                <FormControl
                  className="mb-4 text-start w-full"
                  color={fieldState.error && "error"}
                  label="Why do you want to join us?"
                  labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                  inputStyle="p-1 bg-light50 rounded-lg"
                  outlinedInputStyle="h-auto"
                  multiline
                  minRows={3}
                  {...field}
                />
              )}
            />
          )}  

            <LoadingButton
              fullWidth
              variant="contained"
              className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl"
              type="submit"
              loading={isConsumerPending||isDataContributorPending||isVerifierPending||isCheckPending||isRequestVerifierAgencyTypesPending}
            >
              Finish Setup
            </LoadingButton>
          </Form>
        </FormProvider>
      </FlexBox>
    </FlexBox>
  );
}
